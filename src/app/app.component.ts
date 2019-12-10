import {Component} from '@angular/core';
import {DataService} from './data.service';
import {DataSet} from './chart/chart.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assestatie05EventsPerDay;
  labels: string[];



  constructor(private dataService: DataService, private snackBar: MatSnackBar) {

    this.snackBar.open('Some random message!', 'close');

    this.dataService.eventsPerDay('assestatie-05').then((eventsPerDay) => {
      this.assestatie05EventsPerDay = eventsPerDay;
      this.labels = Object.keys(eventsPerDay);
    });
  }

  generateDataSets(data: {}) {
    const dataSets: DataSet[] = [];
    dataSets.push({
      borderColor: 'green',
      fill: true,
      data: Object.values(data),
      label: 'Login attempts'
    });
    return dataSets;
  }

}
