import { Types } from 'mongoose';

export class CreateNotification {
  userId: Types.ObjectId;
  title: string;
  message: string;
  read?: boolean;
  scheduledAt?: Date;
  expoPushToken?: string;

}