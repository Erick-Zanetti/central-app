import { FinancialReleaseType } from './../models/financial-release.schema';

export interface FinancialReleaseDTO {
    name: string;
    value: number;
    month: { month: number, year: number };
    type: FinancialReleaseType;
}