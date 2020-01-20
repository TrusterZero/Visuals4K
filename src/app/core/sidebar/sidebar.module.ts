import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarItemComponent } from './item/item.component';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [SidebarComponent]
})
export class SidebarModule {}
