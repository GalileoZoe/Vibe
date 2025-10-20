import { Types } from 'mongoose';

export class UpdateSession {
  questionsAnswered?: { questionId: Types.ObjectId; answer: string }[];
  generatedTexts?: Types.ObjectId[]; // en tu caso sería Text
}
