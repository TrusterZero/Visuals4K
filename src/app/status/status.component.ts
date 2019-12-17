import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  colors = ['green', 'orange', 'red'];
  @ViewChild('light', {static: false}) light: ElementRef;
  constructor() {
    interval(4000).subscribe(() => {
      const element = document.getElementById('light').style.borderColor = this.colors[Math.floor(Math.random() * this.colors.length)]
    });
  }

  ngOnInit() {
  }

}
