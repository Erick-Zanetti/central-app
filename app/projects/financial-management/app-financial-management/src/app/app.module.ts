import { MonthLabelPipeModule } from './pipes/month-label/month-label.module';
import { ParcelModule } from 'single-spa-angular/parcel';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlowModule } from './components/flow/flow.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderIntercptor } from './interceptors/header.intercptor';

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
    FlowModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/financial-management' },
    HeaderIntercptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
