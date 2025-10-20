import { Types } from "mongoose";

export class CreateSession {
  userId: Types.ObjectId;
  questionsAnswered?: { questionId: Types.ObjectId; answer: string }[];
}
