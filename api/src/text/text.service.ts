import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateText } from './dto/createtext.dto';
import { UpdateText } from './dto/updatetext.dto';
import { Text, TextDocument } from './schema/text.schema';

@Injectable()
export class TextService {
  constructor(@InjectModel(Text.name) private textModel: Model<TextDocument>) {}

  create(dto: CreateText) {
    return this.textModel.create(dto);
  }

  findAll() {
    return this.textModel.find().populate('userId sessionId').exec();
  }

  findBySession(sessionId: string) {
    return this.textModel.find({ sessionId }).populate('userId').exec();
  }

  findByUser(userId: string) {
    return this.textModel.find({ userId }).populate('sessionId').exec();
  }

  update(id: string, dto: UpdateText) {
    return this.textModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.textModel.findByIdAndDelete(id);
  }
}
