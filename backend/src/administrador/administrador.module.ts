import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministradorSchema } from './administrador.model/administrador.model';

@Module({
  providers: [AdministradorService],
  controllers: [AdministradorController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Administrador',
        schema: AdministradorSchema,
        collection: 'administrators',
      },
    ]),
  ],
})
export class AdministradorModule {}
