import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TipDocument = Tip & Document;

@Schema()
export class Tip {
  @Prop({ required: true })
  text: string;

  @Prop()
  category: string; // gratitud, mentalidad, visualización, etc.

  @Prop()
  type: string;
}

export const TipSchema = SchemaFactory.createForClass(Tip);
