import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParcelModule } from 'single-spa-angular/parcel';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParcelModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
