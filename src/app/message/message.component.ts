import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() remove = new EventEmitter();
  removed = false;
  constructor() { }

  ngOnInit() {
  }

  close() {
    console.log( 'ran close');
    this.remove.emit();
    this.removed = true;
  }

}
