import { Month } from './../models/Month';
import { Receipt } from './../models/Receipt';
import { Injectable } from "@angular/core";
import { Expense } from "../models/Expense";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor() {

    }

    getExpenses(month: Month): Observable<Expense[]> {
        return of([
            new Expense({ month: 7, year: 2022 }, 321, 'abc'),
            new Expense({ month: 7, year: 2022 }, 111, 'aaa'),
        ]);
    }

    getReceipts(month: Month): Observable<Receipt[]> {
        return of([
            new Receipt({ month: 7, year: 2022 }, 456, 'def'),
            new Receipt({ month: 7, year: 2022 }, 222, 'bbb'),
        ]);
    }
}