import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Job } from 'src/app/shared/services/job';
import { JobService } from 'src/app/shared/services/jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  job?: Job;
  constructor(public jobService: JobService, private route: ActivatedRouteSnapshot) {}
  ngOnInit() {
    console.log(this.route);
    this.jobService.getAll().valueChanges().subscribe((jobs) => {
      this.job = jobs.find((job) => job.title === '');
    });
  }
}
