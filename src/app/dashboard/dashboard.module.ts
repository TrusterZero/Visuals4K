import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from '../chart/chart.component';
import { MessageHolderComponent } from '../message-holder/message-holder.component';
import { MessageComponent } from '../message/message.component';
import { StatusComponent } from '../status/status.component';
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
    MessageComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(moduleRoutes),
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
