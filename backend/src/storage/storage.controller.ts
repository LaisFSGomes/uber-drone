import { StorageService } from './storage.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Storage } from './storage.model/storage.model';

@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Post('/create')
  createStorage(@Body() storage: Storage) {
    return this.storageService.createStorage(storage);
  }
  @Get('/storages')
  getAllStorages() {
    return this.storageService.getAllStorages();
  }
}
