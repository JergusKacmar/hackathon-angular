import { Injectable } from '@angular/core';
import { Job } from '../../models/job.model';
import {
    AngularFireDatabase,
    AngularFireList,
  } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class JobService {
    private dbPath = '/jobs'
    jobsRef: AngularFireList<Job>;
    constructor(private db: AngularFireDatabase) {
        this.jobsRef = db.list(this.dbPath); 
    }
    getAll(): AngularFireList<Job> {
        return this.jobsRef;
    }
    create(job: Job): any {
        return this.jobsRef.push(job);
    }
    update(key: string, value: any): Promise<void> {
        return this.jobsRef.update(key, value);
    }
    delete(key: string): Promise<void> {
        return this.jobsRef.remove(key);
    }
    deleteAll(): Promise<void> {
        return this.jobsRef.remove();
    }
}