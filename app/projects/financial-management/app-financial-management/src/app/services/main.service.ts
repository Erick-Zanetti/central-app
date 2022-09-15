import { FinancialReleaseType } from './../models/FinancialReleaseType';
import { environment } from './../../environments/environment';
import { FinancialRelease } from './../models/FinancialRelease';
import { Month } from './../models/Month';
import { Receipt } from './../models/Receipt';
import { Injectable } from "@angular/core";
import { Expense } from "../models/Expense";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    get url() {
        return environment.financialManagementApi;
    }

    constructor(private http: HttpClient) {

    }

    create(financialRelease: FinancialRelease) {
        return this.http.post(this.url, financialRelease);
    }

    findAll() {
        return this.http.get(this.url);
    }

    findOne(id: string) {
        return this.http.get(`${this.url}/${id}`);
    }

    update(id: string, financialRelease: FinancialRelease) {
        return this.http.patch(`${this.url}/${id}`, financialRelease);
    }

    remove(id: string) {
        return this.http.delete(`${this.url}/${id}`);
    }

    getExpenses(month: Month): Observable<Expense[]> {
        return this.getByType(month, FinancialReleaseType.Expense);
    }

    getReceipts(month: Month): Observable<Receipt[]> {
        return this.getByType(month, FinancialReleaseType.Receipt);
    }

    private getByType(month: Month, type: FinancialReleaseType): Observable<FinancialRelease[]> {
        return this.http.get<FinancialRelease[]>(`${this.url}/by-type?type=${type}&month=${month.month}&year=${month.year}`);
    }
}