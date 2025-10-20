import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TextDocument = Text & Document;

@Schema({ timestamps: true })
export class Text {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Session', required: true })
  sessionId: Types.ObjectId;

  @Prop({ required: true })
  text: string;

  @Prop()
  type: string;

  @Prop()
  category: string; // opcional, para filtrar tipo de tip
}

export const TextSchema = SchemaFactory.createForClass(Text);
