import { DroneTypes } from './../../templates/droneTypes';
import { DroneService } from './../../service/drone.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-drone',
  templateUrl: './list-drone.component.html',
  styleUrls: ['./list-drone.component.scss'],
})
export class ListDroneComponent {
  droneList: DroneTypes[] = [];
  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.droneService.list().subscribe({
      next: (drone) => {
        this.droneList = drone;
      },
    });
  }
}
