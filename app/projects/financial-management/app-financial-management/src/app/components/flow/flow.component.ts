import { FinancialReleaseType } from './../../models/FinancialReleaseType';
import { FinancialRelease } from './../../models/FinancialRelease';
import { MainService } from './../../services/main.service';
import { Month } from './../../models/Month';
import { Receipt } from './../../models/Receipt';
import { Expense } from './../../models/Expense';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalReleaseComponentDialog } from '../modal-release/modal-release.component';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  expenses: Expense[] = [];
  receipts: Receipt[] = [];

  private _month: Month;
  @Input()
  set month(month: Month) {
    this._month = month;
    this.searc();
  }

  constructor(
    private mainService: MainService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }

  searc() {
    this.mainService.getExpenses(this._month).subscribe(res => this.expenses = res);
    this.mainService.getReceipts(this._month).subscribe(res => this.receipts = res);
  }

  getBalance(): number {
    return this.sumList(this.receipts) - this.sumList(this.expenses);
  }

  private sumList(list: FinancialRelease[]): number {
    return list.map(t => t.value).reduce((acc, value) => acc + value, 0);
  }

  newReceipt() {
    this.openModalReleaseComponentDialog(true, FinancialReleaseType.Receipt);
  }

  editReceipt(receipt: Receipt) {
    this.openModalReleaseComponentDialog(false, FinancialReleaseType.Receipt, receipt);
  }

  newExpense() {
    this.openModalReleaseComponentDialog(true, FinancialReleaseType.Expense);
  }

  editExpense(expense: Expense) {
    this.openModalReleaseComponentDialog(false, FinancialReleaseType.Expense, expense);
  }

  private openModalReleaseComponentDialog(isNew: boolean, type: FinancialReleaseType, release?: FinancialRelease) {
    const dialogRef = this.dialog.open(ModalReleaseComponentDialog, {
      width: '320px',
      data: {
        new: isNew,
        type: type,
        release: release,
        month: this._month,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.searc();
    });
  }
}
