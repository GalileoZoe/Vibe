import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SettingsDocument = Settings & Document;

@Schema()
export class Settings {
  @Prop({ default: true })
  dailyReminders: boolean;

  @Prop({ type: [String], default: [] })
  preferredCategories: string[];

  @Prop({ default: 'light' })
  theme: 'light' | 'dark' | 'dev';
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);
