import { Component, OnInit } from '@angular/core';
import { mountRootParcel } from 'single-spa';

declare var System: any;
@Component({
  selector: 'app-working-control',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  async config() {
    return System.import('@central-app/parcel-header');
  }
  mountRootParcel = mountRootParcel;
  customProps = {
    parcelProps: {
      title: 'Controle de trabalho'
    }
  }

  constructor(
  ) { }

  ngOnInit() {
  }
}
