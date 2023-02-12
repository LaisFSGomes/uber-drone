import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Storage } from './storage.model/storage.model';

@Injectable()
export class StorageService {
  constructor(
    @InjectModel('Storage') private readonly storageModel: Model<Storage>,
  ) {}

  async createStorage(doc: Storage) {
    const storage = await new this.storageModel(doc).save();
    return {
      message: 'Storage created successfully',
      storage: {
        id: storage.id,
        name: storage.name,
        owner: storage.owner,
        coordinates: storage.coordinates,
      },
    };
  }
  getAllStorages() {
    const storages = this.storageModel.find().exec();
    return storages;
  }
}
