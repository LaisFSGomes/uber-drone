import { Drone } from './drone.model/drone.model';
import { DroneService } from './drone.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('drone')
export class DroneController {
  constructor(private droneService: DroneService) {}

  @Get('/drones')
  getAllDrones() {
    return this.droneService.getAllDrones();
  }

  @Post('/create')
  createDrone(@Body() drone: Drone) {
    return this.droneService.create(drone);
  }
}
