import { Month } from './models/Month';
import { Component, OnInit } from '@angular/core';
import { mountRootParcel } from 'single-spa';

declare var System: any;
@Component({
  selector: 'app-financial-management',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  months: Month[] = [];

  async config() {
    return System.import('@central-app/parcel-header');
  }
  mountRootParcel = mountRootParcel;
  customProps = {
    parcelProps: {
      title: 'Gestão Financeira'
    }
  }

  ngOnInit() {
    this.genearetaMonths();
  }

  genearetaMonths() {
    const today = new Date();
    let counter = 0;
    today.setMonth(today.getMonth() - 1);
    while (counter <= 13) {
      this.months.push({
        year: today.getFullYear(),
        month: today.getMonth() + 1
      });
      today.setMonth(today.getMonth() + 1);
      counter++;
    }
  }
}
