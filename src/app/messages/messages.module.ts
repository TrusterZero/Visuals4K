import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MessagesComponent, MessagesItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [MessagesComponent]
})
export class MessagesModule {}
