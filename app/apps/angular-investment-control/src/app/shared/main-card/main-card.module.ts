import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './main-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainCardComponent
  ]
})
export class MainCardModule { }
