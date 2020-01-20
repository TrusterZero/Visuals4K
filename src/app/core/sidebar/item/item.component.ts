import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class SidebarItemComponent {
  @Input() icon: string;
  @Input() text: string;
}
