import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { TypesOfJob } from 'src/app/models/types-of-jobs.model';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  typesOfJob = TypesOfJob
  profileForm = new FormGroup({
    preferredLanguage: new FormControl(''),
    slovakLevel: new FormControl(''),
    ukrainianLevel: new FormControl(''),
    englishLevel: new FormControl(''),
    phoneNumber: new FormControl(''),
    specialization: new FormControl(''),
  });
  get specialization(): AbstractControl {
    return this.profileForm.get('specialization') as AbstractControl;
  }
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}

  saveForm(): void {
    console.log({
      preferredLanguage: this.profileForm.controls['preferredLanguage'].value,
      phoneNumber: this.profileForm.controls['phoneNumber'].value,
      specialization: this.profileForm.controls['specialization'].value,
    });
  }

  addOrRemoveSpecialization(e: string): void {
    (this.specialization.value as string[]).includes(e)
      ? this.removeSpecialization(e)
      : this.addSpecialization(e);
  }

  addSpecialization(e: string): void {
    this.specialization.setValue([...(this.specialization.value as []), e]);
  }

  removeSpecialization(e: string): void {
    this.specialization.setValue(
      (this.specialization.value as []).filter((s) => s !== e)
    );
  }
}
