import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // private socket;

  // constructor() {
  //   this.socket = io('http://localhost:4200');
  // }

  // emitir (eventName: string, data: any) {
  //   this.socket.emit(eventName, data);
  // }

  // listen(eventName: string) {
  //   return new Observable((observer) => {
  //     this.socket.on(eventName, (data) => {
  //       observer.next(data);
  //     });
  //   });
  // }


  // socket = io.connect('http://localhost:4200/cadastro-user');

}
