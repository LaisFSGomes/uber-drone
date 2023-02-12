import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StorageSchema } from './storage.model/storage.model';

@Module({
  providers: [StorageService],
  controllers: [StorageController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Storage',
        schema: StorageSchema,
        collection: 'storage',
      },
    ]),
  ],
})
export class StorageModule {}
