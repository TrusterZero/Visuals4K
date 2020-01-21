import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from '../chart/chart.component';
import {
  MatCardModule,
  MatSnackBarModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatSnackBar
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MessagesModule } from '../messages/messages.module';

const moduleRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, ChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(moduleRoutes),
    SharedModule,
    MessagesModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [MatSnackBar],
  exports: [DashboardComponent]
})
export class DashboardModule {}
