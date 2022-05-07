import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Job } from 'src/app/shared/services/job';
import { JobService } from 'src/app/shared/services/jobs.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  jobs?: Job[];
  constructor(public jobService: JobService, private router: Router) {}
  ngOnInit() {
    this.jobService.getAll().valueChanges().subscribe((jobs) => {
      this.jobs = jobs
    });
  }
}
