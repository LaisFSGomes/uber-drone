import { MongooseModule } from '@nestjs/mongoose';
import { DroneSchema } from './drone.model/drone.model';
import { Module } from '@nestjs/common';
import { DroneService } from './drone.service';
import { DroneController } from './drone.controller';

@Module({
  providers: [DroneService],
  controllers: [DroneController],
  imports: [
    MongooseModule.forFeature([
      { name: 'Drone', schema: DroneSchema, collection: 'drones' },
    ]),
  ],
})
export class DroneModule {}
