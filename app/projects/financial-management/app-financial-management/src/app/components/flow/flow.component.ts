import { ModalConfirmationComponentDialog } from './../modal-confirmation/modal-confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {

  }

  ngOnInit() {
  }

  searc() {
    this.mainService.getExpenses(this._month).subscribe(res => this.expenses = res || []);
    this.mainService.getReceipts(this._month).subscribe(res => this.receipts = res || []);
  }

  getBalance(): number {
    return this.sumList(this.receipts) - this.sumList(this.expenses);
  }

  private sumList(list: FinancialRelease[]): number {
    return list.map(t => t?.value).reduce((acc, value) => acc + value, 0);
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
        release: JSON.parse(JSON.stringify(release || {})),
        month: this._month,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.searc();
      }
    });
  }

  getTotalExpenses() {
    return this.expenses.map(t => t.value).reduce((acc, value) => acc + value, 0);
  }

  getTotalReceipts() {
    return this.receipts.map(t => t.value).reduce((acc, value) => acc + value, 0);
  }

  remove(id: string) {
    const dialogRef = this.dialog.open(ModalConfirmationComponentDialog, {
      width: '320px',
      data: {
        title: 'Deseja realmente remover esse lançamento ? '
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mainService.remove(id).subscribe({
          complete: () => {
            this._snackBar.open('Lançamento removido com sucesso!', '', {
              duration: 5000
            });
            this.searc();
          },
          error: (error) => {
            this._snackBar.open('Falha ao remover. Tente novamente', 'X', {
              duration: 5000
            });
          }
        });
      }
    });
  }
}
