import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import * as uuid from 'uuid/v1';

export interface ChartData {
  data: string[];
  borderColor: string;
  fill: boolean;
  label: string;
}

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements AfterViewInit {
  @Input() chartType: string;
  @Input() chartDataSets: ChartData[];
  @Input() labels: string[];
  @Input() data: any;
  canvasId = uuid();

  chart: Chart;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    Promise.resolve(null).then(() =>  this.fillChart());
  }


  private fillChart() {
    this.chart = new Chart(this.canvasId, {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.chartDataSets
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        },
        responsive: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    });
  }
}
