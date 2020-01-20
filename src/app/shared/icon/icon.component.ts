import { Component, Input } from '@angular/core';
import { IconType } from './icon.enums';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  iconTypes = IconType;

  @Input() name: string;
  @Input() type?: IconType = IconType.Normal;
  @Input() light?: boolean;
}
