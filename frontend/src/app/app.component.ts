import { RegisterUserComponent } from './features/register-user/register-user.component';
import { DroneTypes } from './templates/droneTypes';
import { StorageType } from './templates/storageTypes';
import { DroneService } from './service/drone.service';
import { userType } from './templates/usersType';
import { UserService } from 'src/app/service/user.service';
import { StorageService } from 'src/app/service/storage.service';
import { environment } from './../environments/environments';
import { Component, OnInit } from '@angular/core';
import * as Matboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  map!: Matboxgl.Map;
  allUsers: userType[] = [];
  allStorages: StorageType[] = [];
  allDrones: DroneTypes[] = [];

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private droneService: DroneService,
  ) {}

  ngOnInit() {
    (Matboxgl as any).accessToken = environment.mapboxKey;
    this.map = new Matboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-40.35501666717306, -3.6923042731622076],
      zoom: 15,
    });

    this.map.addControl(new Matboxgl.NavigationControl());
    this.getUsers();
    this.getStorages();
    this.getDrones();

  }

  createMarker(
    latitude: number,
    longitude: number,
    name: string,
    type: string
  ): void {
    const popup = new Matboxgl.Popup().setHTML(`
    <h5>${name}</h5>
    <p>${type}</p>
    <p>(${longitude}, ${latitude})</p>
    `);
    const marker = new Matboxgl.Marker({
      color: type === 'user' ? 'blue' : type === 'storage' ? 'green' : 'red',
      draggable: true,
    })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(this.map);

    marker.on('dragend', () => {
      const lngLat = marker.getLngLat();
      console.log(lngLat);
    });
  }
  getUsers() {
    this.userService.list().subscribe({
      next: (users) => {
        this.allUsers = users;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        for (let i = 0; i < this.allUsers.length; i++) {
          this.createMarker(
            this.allUsers[i].coordinates.latitude,
            this.allUsers[i].coordinates.longitude,
            this.allUsers[i].name,
            'user'
          );
        }
      },
    });
  }
  getStorages() {
    this.storageService.list().subscribe({
      next: (storages) => {
        this.allStorages = storages;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        for (let i = 0; i < this.allStorages.length; i++) {
          this.createMarker(
            this.allStorages[i].coordinates.latitude,
            this.allStorages[i].coordinates.longitude,
            this.allStorages[i].name,
            'storage'
          );
        }
      },
    });
  }
  getDrones() {
    this.droneService.list().subscribe({
      next: (drones) => {
        this.allDrones = drones;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
