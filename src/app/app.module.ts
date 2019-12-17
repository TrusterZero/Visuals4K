import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import {MatButtonToggleModule, MatCardModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MessageHolderComponent } from './message-holder/message-holder.component';
import { MessageComponent } from './message/message.component';
import {MatTabsModule} from '@angular/material';
import { Chart2Component } from './chart2/chart2.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MessageHolderComponent,
    MessageComponent,
    Chart2Component,
    Chart2Component,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonToggleModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
