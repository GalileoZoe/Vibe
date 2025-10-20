import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/createuser.dto';
import { UpdateUser } from './dto/updateuser.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUser: CreateUser) {
    return this.userModel.create(createUser);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUser: UpdateUser) {
    return this.userModel.findByIdAndUpdate(id, updateUser, { new: true });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
