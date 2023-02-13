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

  constructor(private userService: UserService, appComponent: AppComponent) {}

  create() {
    this.userService.create(this.user).subscribe({
      next: (user) => {
        alert(`usuário ${user.name} cadastrado com sucesso!`);
      },
      error: (err) => {
        alert('Erro ao cadastrar usuário');
      }
    });
  }
}
