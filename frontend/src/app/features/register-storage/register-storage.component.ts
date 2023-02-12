import { UserService } from 'src/app/service/user.service';
import { StorageType } from './../../templates/storageTypes';
import { Component } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-cadastro-armazem',
  templateUrl: './register-storage.component.html',
  styleUrls: ['./register-storage.component.scss'],
})
export class RegisterStorageComponent {
  storage: StorageType = {
    name: '',
    owner: '',
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  };
  owners: string[] = [];
  constructor(
    private storageService: StorageService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.list().subscribe({
      next: (users) => {
        this.owners = users.map((user) => user.name);
      },
    });
  }

  create() {
    console.log(this.storage);
    this.storageService.create(this.storage).subscribe(() => {
      alert('Armazém cadastrado com sucesso!');
    });
  }
  getUsers() {
    this.userService.list().subscribe((users) => {
      console.log(users);
    });
  }
}
