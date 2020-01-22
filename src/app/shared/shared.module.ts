import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { CardComponent } from './card/card.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [IconComponent, CardComponent, StatusComponent],
  imports: [CommonModule],
  exports: [IconComponent, CardComponent, StatusComponent]
})
export class SharedModule {}
