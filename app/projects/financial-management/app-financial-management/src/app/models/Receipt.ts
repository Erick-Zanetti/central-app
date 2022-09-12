import { Month } from './Month';
import { FinancialRelease } from './FinancialRelease';
import { FinancialReleaseType } from './FinancialReleaseType';

export class Receipt extends FinancialRelease {

    constructor(month: Month, value: number, name: string) {
        super(FinancialReleaseType.Receipt, month, value, name);
        this._type = FinancialReleaseType.Receipt;
    }
}