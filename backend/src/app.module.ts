import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StorageModule } from './storage/storage.module';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://laisgomes:root@uber-drive.ecbvlhq.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    StorageModule,
    AdministradorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
