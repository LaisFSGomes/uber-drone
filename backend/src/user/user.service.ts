import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(doc: User) {
    const possibleUser = this.findByEmail(doc.email);
    if (!possibleUser) {
      throw new NotFoundException(
        'User with this email already exists. Please try again',
      );
    }
    const user = await new this.userModel(doc).save();
    return {
      message: 'User created successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        coordinates: user.coordinates,
        password: user.password,
      },
    };
  }
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }
  async findUser(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }
  getUser(id: string) {
    return this.findUser(id);
  }
  async deleteUser(id: string) {
    await this.userModel.deleteOne({ id: id }).exec();
  }
}
