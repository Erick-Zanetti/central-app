import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineItemPosition } from '@frxjs/ngx-timeline';
import { FinancialRelease } from 'src/app/models/FinancialRelease';
import { Month } from 'src/app/models/Month';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.scss'],
})

export class TimelineComponent implements OnInit {
  releases: FinancialRelease[] = [];

  events: NgxTimelineEvent[] = []

  private _month: Month;
  @Input()
  set month(month: Month) {
    this._month = month;
    this.releases = [];
    this.searc();
  }

  constructor(
    private mainService: MainService,
    private currencyPipe: CurrencyPipe,
  ) { }

  ngOnInit() { }

  searc() {
    this.mainService.getReceipts(this._month).subscribe(res => {
      this.releases = this.releases.concat(res);
      this.mainService.getExpenses(this._month).subscribe(res => {
        this.releases = this.releases.concat(res);
        this.convertItens();
      });
    });
  }

  convertItens() {
    this.releases.forEach(item => {
      item.date = new Date(this._month.year, this._month.month, item.month.day);
    });
    this.releases.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });
    this.events = this.releases.map(item => {
      return {
        description: this.currencyPipe.transform(item.value, 'BRL', 'symbol', '1.2-2') + '',
        id: item._id,
        itemPosition: item.type === 'E' ? NgxTimelineItemPosition.ON_RIGHT : NgxTimelineItemPosition.ON_LEFT,
        title: item.name,
        timestamp: item.date,
      }
    });
  }

  getTotalUnitNow(item: NgxTimelineEvent) {
    let achou = false;
    const items = this.releases.filter(i => {
      if (i._id === item.id) {
        achou = true;
        return true;
      }
      return !achou;
    });

    return items.reduce((a, b) => {
      if (b.type === 'E') {
        return a - b.value;
      }
      return a + b.value;
    }, 0);
  }
}
