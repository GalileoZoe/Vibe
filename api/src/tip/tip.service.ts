import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tip, TipDocument } from './schema/tip.schema';
import { CreateTip } from './dto/createtip.dto';
import { UpdateTip } from './dto/updatetip.dto';

@Injectable()
export class TipService {
  constructor(@InjectModel(Tip.name) private tipModel: Model<TipDocument>) {}

  create(dto: CreateTip) {
    return this.tipModel.create(dto);
  }

  findAll() {
    return this.tipModel.find().exec();
  }

  findByCategory(category: string) {
    return this.tipModel.find({ category }).exec();
  }

  update(id: string, dto: UpdateTip) {
    return this.tipModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.tipModel.findByIdAndDelete(id);
  }
}
