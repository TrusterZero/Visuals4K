import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {interval, timer} from 'rxjs';

export interface ChartData {
  data: string[];
  borderColor: string;
  fill: boolean;
  label: string;
}

@Component({
  selector: 'chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})

export class Chart2Component implements OnInit {
  chart: Chart;
  @ViewChild('canvas2', {static: false}) canvas: ElementRef;

  constructor() {

  }

  ngOnInit() {
    const kees = interval(50).subscribe(() => {
      if (!this.canvas.nativeElement.$chartjs) {
        this.fillChartOther();

      } else {
        kees.unsubscribe();
        interval(8000).subscribe(() => {
          this.updateChart();
        });
      }
    });

  }

  private updateChart() {
    this.fillChartOther();
    console.log('attempted update');
  }

  private fillChartOther() {
    this.chart = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: ['data 1', 'data 2', 'data 3', 'data 4'],
        datasets: [{
          borderColor: 'white',
          backgroundColor: [
            '#DEB887',
            '#A9A9A9',
            '#DC143C',
            '#F4A460',
            '#2E8B57'
          ],
          fill: true,
          data: [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10],
          label: 'Login attempts'
        }],
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
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
