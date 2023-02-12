import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drone } from './drone.model/drone.model';

@Injectable()
export class DroneService {
  constructor(
    @InjectModel('Drone') private readonly droneModel: Model<Drone>,
  ) {}

  async create(drone: Drone) {
    const createdDrone = await new this.droneModel(drone).save();
    return {
      message: 'Drone created successfully',
      drone: {
        id: createdDrone.id,
        name: createdDrone.name,
        storage: createdDrone.storage,
        speed: createdDrone.speed,
      },
    };
  }
  async getAllDrones() {
    const drones = await this.droneModel.find().exec();
    return drones;
  }
}
