import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSession } from './dto/createsession.dto';
import { UpdateSession } from './dto/updatesession.dto';
import { Session, SessionDocument } from './schema/session.schema';

@Injectable()
export class SessionService {
  constructor(@InjectModel(Session.name) private sessionModel: Model<SessionDocument>) {}

  create(createSession: CreateSession) {
    return this.sessionModel.create(createSession);
  }

  findAll() {
    return this.sessionModel.find().populate('questionsAnswered.questionId').populate('generatedTexts').exec();
  }

  findByUser(userId: string) {
    return this.sessionModel.find({ userId }).populate('questionsAnswered.questionId').populate('generatedTexts').exec();
  }

  update(id: string, updateDto: UpdateSession) {
    return this.sessionModel.findByIdAndUpdate(id, updateDto, { new: true });
  }

  remove(id: string) {
    return this.sessionModel.findByIdAndDelete(id);
  }
}