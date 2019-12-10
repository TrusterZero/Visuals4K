import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {DataService} from "../data.service";

export interface DataSet {
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

export class ChartComponent implements OnInit {
  @Input() chartType: string;
  @Input() dataSets: DataSet[];
  @Input() labels: string[];
  @Input() data: any;

  chart: Chart;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.fillChart();
  }


  private fillChart() {
    this.chart = new Chart('canvas', {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.dataSets
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
        options: {
          responsive: true
        }
      }
    });
  }
}
