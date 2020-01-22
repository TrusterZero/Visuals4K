import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class MessagesItemComponent implements OnInit {
  @Input() message: Message;
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
