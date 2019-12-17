import {Component, Input, OnInit} from '@angular/core';
import {DataService, DataSet, Message} from '../data.service';
import {interval} from 'rxjs';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-message-holder',
  templateUrl: './message-holder.component.html',
  styleUrls: ['./message-holder.component.scss']
})
export class MessageHolderComponent implements OnInit {
  @Input() searchId;
  messages: Message[] = [];

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {
    // this.dataService.data.subscribe((data: DataSet) => {
    //     //   data.messages.forEach((message: Message) => {
    //     //     if (message.searchId === this.searchId) {
    //     //       this.messages.push(message);
    //     //     }
    //     //   });
    //     // });

    interval(8000).subscribe(() => {
      this.addRandomMessages();
    });
  }

  private addRandomMessages() {

    if (this.messages.length > 5) {
      this.messages = [];
    }
    this.messages.push(this.generateRandomMessage());
  }

  private generateRandomMessage(): Message {
    const array: string[] = ['test', 'assestatie-05'];
    const marray: string[] = ['Alert!', 'Random text', 'This is a test message', 'Something went Wrong!', 'Oh oh!!'];
    const text = marray[Math.floor(Math.random() * marray.length)];
    const message = {
      messageId: '0',
      searchId: array[Math.floor(Math.random() * array.length)],
      message: text,
    };
    this.snackBar.dismiss();
    this.snackBar.open(text, 'close');

    return message;
  }

  ngOnInit(): void {
  }


}
