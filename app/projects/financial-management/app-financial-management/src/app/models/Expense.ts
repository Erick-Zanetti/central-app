import { Month } from './Month';
import { FinancialRelease } from './FinancialRelease';
import { FinancialReleaseType } from './FinancialReleaseType';

export class Expense extends FinancialRelease {

    constructor(month: Month, value: number, name: string) {
        super(FinancialReleaseType.Expense, month, value, name);
        this._type = FinancialReleaseType.Expense;
    }
}