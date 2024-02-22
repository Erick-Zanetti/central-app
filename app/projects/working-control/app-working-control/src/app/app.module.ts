import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ParcelModule } from 'single-spa-angular/parcel';
import { AppComponent } from './app.component';
import { ReleasesModule } from './components/releases/releases.module';
import { HeaderIntercptor } from './interceptors/header.intercptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ParcelModule,
    MatTabsModule,
    ReleasesModule,
    NgxMatTimepickerModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/working-control' },
    HeaderIntercptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
