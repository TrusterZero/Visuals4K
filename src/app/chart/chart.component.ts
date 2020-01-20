import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import * as uuid from 'uuid/v1';
import 'chartjs-plugin-colorschemes';

export interface ChartData {
  data: string[];
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
  private colorSchemes: string[];

  constructor() {

    this.colorSchemes = ['brewer.RdYlGn11', 'brewer.Paired12', 'brewer.PastelTwo8', 'brewer.SetThree12'];

  }

  ngAfterViewInit() {
    Promise.resolve(null).then(() => this.fillChart());
  }

  public resize() {
    this.chart.resize();
  }

  private fillChart() {
    this.chart = new Chart(this.canvasId, {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.chartDataSets
      },
      options: {
        plugins: {
          colorschemes: {
            scheme: this.colorSchemes[Math.floor(Math.random() * this.colorSchemes.length)]
          }
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
          }],
        },
        responsive: true,
        maintainAspectRatio: false,
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
