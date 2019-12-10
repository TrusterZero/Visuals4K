import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import * as mockdata from './mockdata.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Subject<any> = new Subject<any>();

  constructor() {

  }

  refreshData() {
    this.data.next(mockdata);
  }

}
