import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import * as mockdata from './mockdata.json';


interface SearchObject {
  id: string;
  data: any[];
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  data: Subject<any[]> = new Subject<any[]>();

  constructor() {
    this.startPolling();
  }

  refreshData() {
    this.data.next(mockdata.result);
  }

  private startPolling() {
    const poll = timer(5).subscribe(() => {
      this.refreshData();
      this.startPolling();
    });
  }

  eventsPerDay(id: string): Promise<any> {
    return new Promise(resolve => {
      const unsortedEventsPerDay: any = {};
      const sortedEventsPerDay: any = {};

      this.data.subscribe((data: SearchObject[]) => {
        for (const result of data) {
          if (result.id === id) {
            result.data.forEach((event) => {
              if (event.result._time) {
                const time = new Date(event.result._time.split(' ')[0]).toLocaleDateString();
                if (!unsortedEventsPerDay[time]) {
                  unsortedEventsPerDay[time] = 1;
                } else {
                  unsortedEventsPerDay[time]++;
                }
              }
            });
            Object.keys(unsortedEventsPerDay).sort().forEach( (key) => {
              sortedEventsPerDay[key] = unsortedEventsPerDay[key];
            });
            resolve(sortedEventsPerDay);
          }
        }
        this.data.unsubscribe();
      });
    });
  }
}
