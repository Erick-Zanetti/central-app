import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as Sm } from 'mongoose';

export enum FinancialReleaseType {
    Receipt = 'R',
    Expense = 'E'
}

export type FinancialReleaseDocument = FinancialRelease & Document;

@Schema()
export class FinancialRelease {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    value: number;

    @Prop({ required: true, type: Sm.Types.Mixed })
    month: { month: number, year: number };

    @Prop({ required: true, type: String, enum: Object.values(FinancialReleaseType) })
    type: FinancialReleaseType;
}

export const FinancialReleaseSchema = SchemaFactory.createForClass(FinancialRelease);
