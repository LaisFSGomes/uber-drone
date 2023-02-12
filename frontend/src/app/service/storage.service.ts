import { StorageType } from '../templates/storageTypes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly API = 'http://localhost:3000/storage/';

  constructor(private http: HttpClient) { }

  create(armazem: StorageType): Observable<StorageType> {
    return this.http.post<StorageType>(`${this.API}create/`, armazem);
  }
  list(): Observable<StorageType[]> {
    return this.http.get<StorageType[]>(`${this.API}storages/`);
  }
}
