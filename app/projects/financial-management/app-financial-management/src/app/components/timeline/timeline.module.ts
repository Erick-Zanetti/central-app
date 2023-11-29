import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';
import { TimelineComponent } from './timeline.component';

@NgModule({
  imports: [NgxTimelineModule, CommonModule],
  exports: [TimelineComponent],
  declarations: [TimelineComponent],
  providers: [CurrencyPipe],
})
export class TimelineModule { }
