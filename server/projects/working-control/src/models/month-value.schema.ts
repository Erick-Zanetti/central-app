import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as Sm } from 'mongoose';

export type MonthValueDocument = MonthValue & Document;

@Schema()
export class MonthValue {
  @Prop({ required: true })
  value: number;

  @Prop({ required: true, type: Sm.Types.Mixed })
  month: { month: number; year: number };
}

export const MonthValueSchema = SchemaFactory.createForClass(MonthValue);
