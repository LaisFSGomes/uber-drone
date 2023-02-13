import { userType } from './../templates/usersType';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = 'http://localhost:3000/user/';

  constructor(private http: HttpClient) { }

  create(user: userType): Observable<userType> {
    return this.http.post<userType>(`${this.API}create/`, user);
  }

  list(): Observable<userType[]> {
    return this.http.get<userType[]>(`${this.API}users/`);
  }
  getUser(id: string): Observable<userType> {
    return this.http.get<userType>(`${this.API}${id}`);
  }
}
