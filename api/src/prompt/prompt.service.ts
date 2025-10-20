import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrompt } from './dto/createprompt.dto';
import { UpdatePrompt } from './dto/updateprompt.dto';
import { Prompt, PromptDocument } from './schema/prompt.schema';


@Injectable()
export class PromptService {
  constructor(@InjectModel(Prompt.name) private promptModel: Model<PromptDocument>) {}

  create(dto: CreatePrompt) {
    return this.promptModel.create(dto);
  }

  findAll() {
    return this.promptModel.find().exec();
  }

  findByCategory(category: string) {
    return this.promptModel.find({ category }).exec();
  }

  update(id: string, dto: UpdatePrompt) {
    return this.promptModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.promptModel.findByIdAndDelete(id);
  }
}
