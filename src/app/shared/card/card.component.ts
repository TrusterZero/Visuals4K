import { Component, Input } from '@angular/core';
import { Status } from '../status/status.enums';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title?: string;
  @Input() status?: Status;
  @Input() scrollable?: boolean;
}
