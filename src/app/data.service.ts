import {Injectable} from '@angular/core';
import {interval, Subject, timer} from 'rxjs';
import * as mockdata from './mockdata.json';

export interface DataSet {
  searches: SearchObject[];
  messages: Message[];
}

export interface SearchObject {
  id: string;
  data: any[];
}

export interface Message {
  searchId: string;
  messageId: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  data: Subject<DataSet> = new Subject<DataSet>();

  constructor() {
    this.startPolling();
  }

  refreshData() {
    const dataSet: DataSet = mockdata.dataSet;
    this.data.next(dataSet);

  }

  private startPolling() {
    const poll = timer(5000).subscribe(() => {
      this.refreshData();
      this.startPolling();
    });
  }

  parseLogin02() {
    let login02 = null;

    this.data.subscribe((data: DataSet) => {
      data.searches.forEach((search: SearchObject) => {
        if (search.id === 'login-02') {
          login02 = search.data;
        }
      });
    });
  }

  eventsPerDay(id: string): Promise<any> {
    return new Promise(resolve => {
      const unsortedEventsPerDay: any = {};
      const sortedEventsPerDay: any = {};

      this.data.subscribe((data: DataSet) => {
        for (const result of data.searches) {
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
            Object.keys(unsortedEventsPerDay).sort().forEach((key) => {
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
