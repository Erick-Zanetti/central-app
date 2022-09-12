import { MonthLabelPipeModule } from './pipes/month-label/month-label.module';
import { ParcelModule } from 'single-spa-angular/parcel';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlowModule } from './components/flow/flow.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ParcelModule,
    MatTabsModule,
    MonthLabelPipeModule,
    BrowserAnimationsModule,
    FlowModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/financial-management' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
