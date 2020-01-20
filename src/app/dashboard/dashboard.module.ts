import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from '../chart/chart.component';
import { MessageHolderComponent } from '../message-holder/message-holder.component';
import { MessageComponent } from '../message/message.component';
import {
  MatCardModule,
  MatSnackBarModule,
  MatTabsModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSnackBar
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const moduleRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    MessageHolderComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(moduleRoutes),
    SharedModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [MatSnackBar],
  exports: [DashboardComponent]
})
export class DashboardModule {}
