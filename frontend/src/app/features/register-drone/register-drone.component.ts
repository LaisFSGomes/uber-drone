import { AppComponent } from './../../app.component';
import { StorageService } from 'src/app/service/storage.service';
import { DroneService } from './../../service/drone.service';
import { DroneTypes } from './../../templates/droneTypes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-drone',
  templateUrl: './register-drone.component.html',
  styleUrls: ['./register-drone.component.scss'],
})
export class RegisterDroneComponent {
  drone: DroneTypes = {
    id: '',
    name: '',
    storage: '',
    speed: 0,
  };
  storages: string[] = [];

  constructor(
    private droneService: DroneService,
    private storageService: StorageService,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    this.storageService.list().subscribe({
      next: (storages) => {
        this.storages = storages.map((storage) => storage.name);
      },
    });
  }

  create() {
    this.droneService.create(this.drone).subscribe({
      next: (drone) => {
        alert("Drone cadastrado com sucesso!");
        this.drone = {
          id: '',
          name: '',
          storage: '',
          speed: 0,
        };
      },
      complete: () => {
        this.app.getDrones();
      },
    });
  }
}
