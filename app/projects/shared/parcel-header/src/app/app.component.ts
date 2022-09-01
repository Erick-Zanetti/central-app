import { singleSpaPropsSubject } from './../single-spa/single-spa-props';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'parcel-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'parcel-header';

  ngOnInit() {

    singleSpaPropsSubject
      .pipe(take(1))
      .subscribe(props => {
        if (props && props['parcelProps'] && props['parcelProps']['title']) {
          this.title = props['parcelProps']['title']
        }
      });
  }

  goToHome() {
    window.location.href = window.location.origin + '/home';
  }
}
