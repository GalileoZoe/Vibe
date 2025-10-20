import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromptDocument = Prompt & Document;

@Schema()
export class Prompt {
  @Prop({ required: true })
  text: string;

  @Prop()
  type: 'input' | 'choice' | 'rating';

  @Prop()
  category: string; // gratitud, visualización, objetivos, etc.
}

export const PromptSchema = SchemaFactory.createForClass(Prompt);
