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
            new Expense({ month: 7, year: 2022 }, 718.45, 'Itau'),
            new Expense({ month: 7, year: 2022 }, 580, 'Ingles'),
            new Expense({ month: 7, year: 2022 }, 7790.49, 'C6'),
        ]);
    }

    getReceipts(month: Month): Observable<Receipt[]> {
        return of([
            new Receipt({ month: 7, year: 2022 }, 5500, 'Salario'),
            new Receipt({ month: 7, year: 2022 }, 300, 'Vitor'),
            new Receipt({ month: 7, year: 2022 }, 650, 'Well Celular'),
            new Receipt({ month: 7, year: 2022 }, 260, 'Well Robo'),
            new Receipt({ month: 7, year: 2022 }, 550, 'Mãe Ingles/Camera'),
            new Receipt({ month: 7, year: 2022 }, 300, 'Reembolso'),
            new Receipt({ month: 7, year: 2022 }, 270, 'Saldo'),
            new Receipt({ month: 7, year: 2022 }, 3000, 'Emprestimo Rod'),
        ]);
    }
}