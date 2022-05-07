import { Injectable } from '@angular/core';
import { Chat } from './chat';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private dbPath = '/messages';
  messagesRef: AngularFireList<Chat>;

  constructor(private db: AngularFireDatabase) {
    this.messagesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Chat> {
    return this.messagesRef;
  }

  create(message: Chat): any {
    return this.messagesRef.push(message);
  }

  update(key: string, value: any): Promise<void> {
    return this.messagesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.messagesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.messagesRef.remove();
  }
}
