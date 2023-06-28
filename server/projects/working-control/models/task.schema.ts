import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as Sm } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  task: string;

  @Prop({ required: true })
  hours: number;

  @Prop({ required: true })
  minutes: number;

  @Prop({ required: true, type: Sm.Types.Mixed })
  month: { month: number; year: number };
}

export const TaskSchema = SchemaFactory.createForClass(Task);
