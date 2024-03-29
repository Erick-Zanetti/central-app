import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FinancialRelease } from './../../models/FinancialRelease';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = ['day', 'name', 'value', 'action'];
  dataSource: MatTableDataSource<FinancialRelease>;

  private _list: FinancialRelease[];
  @Input()
  set list(list: FinancialRelease[]) {
    this._list = list;
    this._list.forEach((item) => {
      item.day = item.month.day;
    });
    this.dataSource = new MatTableDataSource(this._list);
    this.dataSource.sort = this.sort;
  }

  @Input()
  title: string;

  @Output()
  onAdd = new EventEmitter();

  @Output()
  onEdit = new EventEmitter();

  @Output()
  onRemove = new EventEmitter();

  constructor(
  ) {
    this.dataSource = new MatTableDataSource(this._list || []);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sort.sort({ id: 'day', start: 'asc', disableClear: false });
    this.dataSource.sort = this.sort;
  }

  getTotalCost() {
    return this._list.map(t => t.value).reduce((acc, value) => acc + value, 0);
  }

  add() {
    this.onAdd.emit();
  }

  edit(row: FinancialRelease) {
    this.onEdit.emit(row);
  }

  remove(row: FinancialRelease) {
    this.onRemove.emit(row._id);
  }
}
