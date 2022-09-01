import { ParcelModule } from 'single-spa-angular/parcel';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/portfolio'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
