import {Component} from '@angular/core';
import {DataService, DataSet} from './data.service';
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
  labels: string[];



  constructor(private dataService: DataService) {


    this.dataService.data.subscribe((dataSet: DataSet) => {
    });
    this.dataService.eventsPerDay('assestatie-05').then((eventsPerDay) => {
      this.assestatie05EventsPerDay = eventsPerDay;
      this.labels = Object.keys(eventsPerDay);
    });
  }

  generateDataSets(data: {}) {
    const dataSets: ChartData[] = [];
    dataSets.push({
      borderColor: 'green',
      fill: false,
      data: Object.values(data),
      label: 'Login attempts'
    });
    return dataSets;
  }

}
