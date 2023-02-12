import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DroneTypes } from '../templates/droneTypes';

@Injectable({
  providedIn: 'root',
})
export class DroneService {
  private readonly API = 'http://localhost:3000/drone/';

  constructor(private http: HttpClient) {}

  create(drone: DroneTypes): Observable<DroneTypes> {
    return this.http.post<DroneTypes>(`${this.API}create/`, drone);
  }
  list(): Observable<DroneTypes[]> {
    return this.http.get<DroneTypes[]>(`${this.API}drones/`);
  }
}
