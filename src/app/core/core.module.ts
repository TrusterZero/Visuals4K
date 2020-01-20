import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, SidebarModule],
  exports: [HeaderModule, SidebarModule]
})
export class CoreModule {}
