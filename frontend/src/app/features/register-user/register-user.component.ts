import { WebsocketService } from './../../service/websocket.service';
import { AppComponent } from './../../app.component';
import { userType } from '../../templates/usersType';
import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent {
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
    // private socket: WebsocketService,
    private app: AppComponent
  ) {}

  create() {
    this.userService.create(this.user).subscribe({
      next: (user) => {
        alert('usuário cadastrado com sucesso!');
        this.user = {
          name: '',
          email: '',
          password: '',
          coordinates: {
            latitude: 0,
            longitude: 0,
          },
        };
      },
      error: (err) => {
        alert('Erro ao cadastrar usuário');
      },
      complete: () => {
        this.app.getUsers();
      },
      // complete: () => {
      //   this.socket.socket.emit('newUser', this.user);
      // }
    });
  }
}
