import { Observable } from 'rxjs';
import { AdmTypes } from './../templates/admTypes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdministratorService {
  private readonly API = 'http://localhost:3000/administrator/';

  constructor(private http: HttpClient) {}

  create(adm: AdmTypes): Observable<AdmTypes> {
    return this.http.post<AdmTypes>(`${this.API}create/`, adm);
  }
  list(): Observable<AdmTypes[]> {
    return this.http.get<AdmTypes[]>(`${this.API}administrators/`);
  }
}
