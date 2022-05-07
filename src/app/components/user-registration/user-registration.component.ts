import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TypesOfJob } from 'src/app/models/types-of-jobs.model';
import { Job } from 'src/app/shared/services/job';
import { JobService } from 'src/app/shared/services/jobs.service';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  typesOfJob = TypesOfJob;
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
  constructor(public jobService: JobService, private router: Router) {}
  ngOnInit(): void {}

  saveForm(): void {
    console.log({
      preferredLanguage: this.profileForm.controls['preferredLanguage'].value,
      slovakLevel: this.profileForm.controls['slovakLevel'].value,
      ukrainianLevel: this.profileForm.controls['ukrainianLevel'].value,
      englishLevel: this.profileForm.controls['ukrainianLevel'].value,
      phoneNumber: this.profileForm.controls['phoneNumber'].value,
      specialization: this.profileForm.controls['specialization'].value,
    });
    this.router.navigateByUrl('job-list')
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
