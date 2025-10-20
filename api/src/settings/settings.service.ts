import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { UpdateSettings } from './dto/updatesettings.dto';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Settings están embebidos dentro de User
  update(userId: string, dto: UpdateSettings) {
    return this.userModel.findByIdAndUpdate(userId, { settings: dto }, { new: true });
  }

  find(userId: string) {
    return this.userModel.findById(userId).select('settings').exec();
  }
}
