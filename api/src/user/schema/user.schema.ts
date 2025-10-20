import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop()
  bio: string;

  @Prop({ type: Object })
  preferences: object; // dailyReminders, preferredCategories, theme, etc.
}

export const UserSchema = SchemaFactory.createForClass(User);
