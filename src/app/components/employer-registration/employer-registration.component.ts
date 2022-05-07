import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TypesOfJob } from 'src/app/models/types-of-jobs.model';
import { Job } from 'src/app/shared/services/job';
import { JobService } from 'src/app/shared/services/jobs.service';
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
  constructor(public jobService: JobService, private router: Router) {}
  ngOnInit(): void {}

  saveForm(): void {
    console.log({
      phoneNumber: this.profileForm.controls['phoneNumber'].value,
      specialization: this.profileForm.controls['specialization'].value,
    });
    this.jobService.create({
      phoneNumber: this.profileForm.controls['phoneNumber'].value,
      category: this.profileForm.controls['specialization'].value,
      payment: this.profileForm.controls['payment'].value,
      title: this.profileForm.controls['name'].value,
      advertState: 'open',
      description: this.profileForm.controls['description'].value,
      expireOn: this.profileForm.controls['expiration'].value,
      duration: this.profileForm.controls['duration'].value,

    } as Job)



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
