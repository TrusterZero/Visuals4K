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

    interval(20000).subscribe(() => {
      this.addRandomMessages();
    });
  }

  private addRandomMessages() {

    if (this.messages.length > 10) {
      this.messages = [];
    }
    this.messages.push(this.generateRandomMessage());
  }

  private generateRandomMessage(): Message {
    const array: string[] = ['test', 'assestatie-05'];
    // tslint:disable-next-line:max-line-length
    const marray: string[] = ['25 accounts disabled within 24 hours', '10 phishing sites accessed within 12 hours', 'J.doe accessed his account from an unsecured location over 30 times ', 'Over 10 password resets attempted from an unsecured location'];
    const text = marray[Math.floor(Math.random() * marray.length)];
    const message = {
      messageId: '0',
      searchId: array[Math.floor(Math.random() * array.length)],
      message: text,
    };
    this.snackBar.dismiss();
    // this.snackBar.open(text, 'close');

    return message;
  }

  ngOnInit(): void {
  }


}
