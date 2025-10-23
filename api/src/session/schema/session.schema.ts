import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SessionDocument = Session & Document;

@Schema({ timestamps: true })
export class Session {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop([{ 
    questionId: { type: Types.ObjectId, ref: 'Prompt' },
    answer: String
  }])
  questionsAnswered: { questionId: Types.ObjectId; answer: string }[];

  @Prop([{ type: Types.ObjectId, ref: 'GeneratedText' }])
  generatedTexts: Types.ObjectId[];

  
}

export const SessionSchema = SchemaFactory.createForClass(Session);
