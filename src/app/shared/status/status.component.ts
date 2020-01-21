import { Component, OnInit, Input } from '@angular/core';
import { Status } from './status.enums';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  private readonly status: Status[] = [
    Status.Danger,
    Status.Warning,
    Status.Success
  ];
  @Input() currentStatus: Status;

  ngOnInit() {
    this.currentStatus = this.random();
    setInterval(() => {
      this.currentStatus = this.random();
    }, 4000);
  }

  private random(): Status {
    return (this.currentStatus = this.status[
      Math.floor(Math.random() * this.status.length)
    ]);
  }
}
