import { AppComponent } from './../../app.component';
import { StorageService } from 'src/app/service/storage.service';
import { StorageType } from './../../templates/storageTypes';
import { userType } from './../../templates/usersType';
import { UserService } from 'src/app/service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent {
  usersList: userType[] = [];
  storageslist: StorageType[] = [];
  user: userType = {
    name: '',
    email: '',
    password: '',
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  };

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    this.userService.list().subscribe({
      next: (users) => {
        this.usersList = users;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.storageService.list().subscribe({
          next: (storages) => {
            this.storageslist = storages;
            // console.log(this.usersList);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {},
        });
      },
    });
  }
  haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371; // km
    var dLat = ((lat2 - lat1) * Math.PI) / 180;
    var dLon = ((lon2 - lon1) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }
  orderMenorDistancia(id: string | undefined) {
    if (id) {
      this.userService.getUser(id).subscribe({
        next: (user) => {
          this.user = user;
        },
        complete: () => {
          this.app.chageCenterMap(this.user.coordinates.latitude, this.user.coordinates.longitude);
          let armazemMaisProximo: StorageType = this.storageslist[0];
          let menorDistancia: number = this.haversine(
            this.user.coordinates.latitude,
            this.user.coordinates.longitude,
            armazemMaisProximo.coordinates.latitude,
            armazemMaisProximo.coordinates.longitude
          );
          this.storageslist.forEach((storage) => {
            if (
              this.haversine(
                this.user.coordinates.latitude,
                this.user.coordinates.longitude,
                storage.coordinates.latitude,
                storage.coordinates.longitude
              ) <
              this.haversine(
                this.user.coordinates.latitude,
                this.user.coordinates.longitude,
                armazemMaisProximo.coordinates.latitude,
                armazemMaisProximo.coordinates.longitude
              )
            ) {
              armazemMaisProximo = storage;
              menorDistancia = this.haversine(
                this.user.coordinates.latitude,
                this.user.coordinates.longitude,
                armazemMaisProximo.coordinates.latitude,
                armazemMaisProximo.coordinates.longitude
              );
            }
          });
          alert(
            `o armazem mais próximo é o ${armazemMaisProximo.name}, que está a ${menorDistancia} km de distância`
          );
          this.app.addLineBetweenPointsOnMap(
            this.user.coordinates.latitude,
            this.user.coordinates.longitude,
            armazemMaisProximo.coordinates.latitude,
            armazemMaisProximo.coordinates.longitude,
            `${armazemMaisProximo._id}-${this.user._id}`
          );
          setTimeout(() => {
            this.app.removeLineBetweenPointsOnMap(
              `${armazemMaisProximo._id}-${this.user._id}`
            );
          }, 6000);
        },
      });
    }
  }
}
