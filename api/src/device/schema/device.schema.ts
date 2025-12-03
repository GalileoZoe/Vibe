import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ timestamps: true })
export class Device {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  deviceId: string; // Unique per device

  @Prop({ required: true })
  fcmToken: string; // Firebase push token

  @Prop()
  deviceModel?: string;

  @Prop()
  os?: string;

  @Prop()
  appVersion?: string;

  @Prop({ default: true })
  active: boolean;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
