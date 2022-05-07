import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { TypesOfJob } from 'src/app/models/types-of-jobs.model';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-employer-registration',
  templateUrl: './employer-registration.component.html',
  styleUrls: ['./employer-registration.component.scss'],
})
export class EmployerRegistrationComponent implements OnInit {
  typesOfJob = TypesOfJob;
  profileForm = new FormGroup({
    legalRelation: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(''),
    location: new FormControl(''),
    payment: new FormControl(''),
    expiration: new FormControl(''),
    phoneNumber: new FormControl(''),
    specialization: new FormControl([]),
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
