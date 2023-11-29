import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParcelModule } from 'single-spa-angular/parcel';
import { AppComponent } from './app.component';
import { FlowModule } from './components/flow/flow.module';
import { TimelineModule } from './components/timeline/timeline.module';
import { HeaderIntercptor } from './interceptors/header.intercptor';
import { MonthLabelPipeModule } from './pipes/month-label/month-label.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ParcelModule,
    MatTabsModule,
    MonthLabelPipeModule,
    BrowserAnimationsModule,
    TimelineModule,
    FlowModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/financial-management' },
    HeaderIntercptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
