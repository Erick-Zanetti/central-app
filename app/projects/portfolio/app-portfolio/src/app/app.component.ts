import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

declare var System: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  async config() {
    return System.import('@central-app/parcel-header');
  }
  mountRootParcel = mountRootParcel;
  customProps = {
    parcelProps: {
      title: 'Portifolio'
    }
  }
}
