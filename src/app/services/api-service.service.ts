import { getDatabase } from 'firebase/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  database = getDatabase();

  constructor() {}
}
