import { Types } from 'mongoose';

export class CreateText {
  userId: Types.ObjectId;
  sessionId: Types.ObjectId;
  text: string;
  type?: string;
  category?: string;
}
