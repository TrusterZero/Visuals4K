import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval} from 'rxjs';
import * as uuid from 'uuid/v1';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  colors = ['#22c28b', '#c28b22', '#c23b22'];
  lightId = uuid();
  constructor() {
    interval(4000).subscribe(() => {
      document.getElementById(this.lightId).style.borderColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    });
  }

  ngOnInit() {
  }

}
