import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService, DataSet } from '../data.service';
import { ChartData } from '../chart/chart.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('chart', {static: false}) chart: ElementRef;
  assestatie05EventsPerDay;
  login02EventsPerDay;
  assestatie05EvetsPerDaylabels: string[];
  login02EventsperDaylabels: string[];
  login02;
  chartsSet = false;
  pageIndex: number = 0;


  constructor(private dataService: DataService) {

    interval(10000).subscribe(() => {
      this.pageIndex === 0 ? this.pageIndex = 1  : this.pageIndex = 0;
    });

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
    this.setCharts();
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

  setCharts() {
    return this.chartsSet = true;
  }
}
