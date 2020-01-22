import { Component, OnInit } from '@angular/core';
import { Message } from './messages.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  private messageId = 1;
  typeArray: string[] = ['test', 'assestatie-05'];
  messagesArray: string[] = [
    '25 accounts disabled within 24 hours',
    '10 phishing sites accessed within 12 hours',
    'J.doe accessed his account from an unsecured location over 30 times ',
    'Over 10 password resets attempted from an unsecured location'
  ];
  activeMessages: Message[] = [];

  constructor() {}

  ngOnInit() {
    this.addRandomMessage();

    setInterval(() => {
      this.addRandomMessage();
    }, 20000);
  }

  removeMessage(id: number) {
    this.activeMessages = this.activeMessages.filter(message => message.id !== id);
  }

  private addRandomMessage() {
    const newType = this.typeArray[
      Math.floor(Math.random() * this.typeArray.length)
    ];
    const newMessage = this.messagesArray[
      Math.floor(Math.random() * this.messagesArray.length)
    ];

    this.activeMessages.unshift({
      id: this.messageId,
      type: newType,
      message: newMessage
    });

    this.messageId += 1;

    if (this.activeMessages.length > 10) {
      this.activeMessages.pop();
    }
  }
}
