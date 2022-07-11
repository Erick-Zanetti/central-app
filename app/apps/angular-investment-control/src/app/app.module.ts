import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardModule } from './shared/main-card/main-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainCardModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/investment-control' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
