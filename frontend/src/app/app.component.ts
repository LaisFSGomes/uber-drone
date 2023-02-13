import { WebsocketService } from './service/websocket.service';
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
  public allUsers: userType[] = [];
  allStorages: StorageType[] = [];
  allDrones: DroneTypes[] = [];
  eventData: any;

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private droneService: DroneService,
    private socket: WebsocketService
  ) {}

  ngOnInit() {
    // this.socket.socket.on('newUser', (data: any) => {
    //   alert("aaa");
    // });

    (Matboxgl as any).accessToken = environment.mapboxKey;
    this.map = new Matboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-40.35501666717306, -3.6923042731622076],
      zoom: 15,
    });

    this.map.addControl(new Matboxgl.NavigationControl());
    this.getLocation();
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
    <p>(${latitude}, ${longitude})</p>
    `);
    const marker = new Matboxgl.Marker({
      color: type === 'user' ? 'blue' : type === 'storage' ? 'green' : 'red',
      // draggable: true,
    })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(this.map);
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

  addLineBetweenPointsOnMap(
    latitude1: number,
    longitude1: number,
    latitude2: number,
    longitude2: number,
    id: string
  ): void {
    this.map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [longitude1, latitude1],
            [longitude2, latitude2],
          ],
        },
      }
    });
    this.map.addLayer({
      id: id,
      type: 'line',
      source: id,
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#888',
        'line-width': 8
      }
    });
  }
  removeLineBetweenPointsOnMap(id: string): void {
    this.map.removeLayer(id);
    this.map.removeSource(id);
    alert("viagem concluída");
  }
  chageCenterMap(latitude: number, longitude: number): void {
    this.map.flyTo({
      center: [longitude, latitude],
      essential: true,
      zoom: 15,
    });
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.chageCenterMap(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
     this.chageCenterMap(-40.35501666717306, -3.6923042731622076);
    }
  }
}
