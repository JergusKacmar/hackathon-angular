import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Chat } from 'src/app/shared/services/chat';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService],
})
export class ChatComponent implements OnInit {
  chat: Chat;
  submitted = false;
  messages?: Chat[];
  form: any;

  constructor(
    public authService: AuthService,
    public chatService: ChatService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      message: this.fb.control(''),
    });
    this.retrieveMessages();
    // this.sendMessage(
    //   'Ahoj, ja som Rasto, aku pracu by si rad robil?',
    //   'Rastislav Vangor'
    // );
    // this.sendMessage(
    //   'Ahoj, ja som Luky, chcel by som nejaku rychlu robotku, nejaky Angularik, alebo daco.',
    //   'Lukas Podracky'
    // );
    // this.sendMessage('A live chat cez Firebase nehces?', 'Rastislav Vangor');
  }

  onSubmit(): void {
    this.sendMessage(
      this.form.get('message').value,
      this.authService.userData.displayName
    );
  }

  retrieveMessages(): void {
    this.chatService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.messages = data;
      });
  }

  sendMessage(message: string, username: string): void {
    this.chatService.create(new Chat(message, username));
    // this.chatService.create(new Chat(message, username)).then(() => {
    //   console.log('Created new item successfully!');
    // });
  }
}
