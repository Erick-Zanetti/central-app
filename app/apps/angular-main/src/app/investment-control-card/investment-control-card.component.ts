import {
  Component,
  OnInit,
} from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-investment-control-card',
  templateUrl: './investment-control-card.component.html',
  styleUrls: ['./investment-control-card.component.scss']
})
export class InvestmentControlCardComponent implements OnInit {

  public config: any;
  public mountRootParcel = mountRootParcel;

  constructor() { }

  ngOnInit(): void {
    this.config = () => System.import('angular-investment-control');
  }

}
