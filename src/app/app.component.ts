import {Component} from '@angular/core';
import {DataService, DataSet, SearchObject} from './data.service';
import {ChartData} from './chart/chart.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assestatie05EventsPerDay;
  login02EventsPerDay;
  assestatie05EvetsPerDaylabels: string[];
  login02EventsperDaylabels: string[];
  login02;



  constructor(private dataService: DataService) {


    this.dataService.data.subscribe((dataSet: DataSet) => {
    });
    this.dataService.eventsPerDay('assestatie-05').then((eventsPerDay) => {
      this.assestatie05EventsPerDay = eventsPerDay;
      this.assestatie05EvetsPerDaylabels = Object.keys(eventsPerDay);
    });
    this.dataService.eventsPerDay('login-02').then((eventsPerDay) => {
      this.login02EventsPerDay = eventsPerDay;
      this.login02EventsperDaylabels = Object.keys(eventsPerDay);
    });
  }


  generateDataSets(data: {}) {
    const dataSets: ChartData[] = [];
    dataSets.push({
      fill: false,
      data: Object.values(data),
      label: 'Login attempts'
    });
    return dataSets;
  }

  generateAssestatieDataSets(data: {}) {
    const dataSets: ChartData[] = [];
    dataSets.push({
      fill: true,
      data: Object.values(data),
      label: 'Login attempts'
    });
    return dataSets;
  }

}
