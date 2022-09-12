import { FinancialReleaseType } from './FinancialReleaseType';
import { Month } from './Month';

export class FinancialRelease {
    protected _type: FinancialReleaseType;
    public get type(): FinancialReleaseType {
        return this._type;
    }

    private _month: Month;
    public get month(): Month {
        return this._month;
    }
    public set month(value: Month) {
        this._month = value;
    }

    private _value: number;
    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    constructor(type: FinancialReleaseType, month: Month, value: number, name: string) {
        this._type = type;
        this._month = month;
        this._value = value;
        this._name = name;
    }
}