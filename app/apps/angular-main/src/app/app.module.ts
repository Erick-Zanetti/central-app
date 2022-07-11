import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestmentControlCardComponent } from './investment-control-card/investment-control-card.component';
import { ParcelModule } from 'single-spa-angular/parcel';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentControlCardComponent
  ],
  imports: [
    BrowserModule,
    ParcelModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/main' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
