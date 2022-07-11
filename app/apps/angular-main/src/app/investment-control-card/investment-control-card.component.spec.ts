import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentControlCardComponent } from './investment-control-card.component';

describe('InvestmentControlCardComponent', () => {
  let component: InvestmentControlCardComponent;
  let fixture: ComponentFixture<InvestmentControlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentControlCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentControlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
