import { AdministratorService } from 'src/app/service/administrator.service';
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
    private admService: AdministratorService
  ) {}
  ngOnInit(): void {
    this.admService.list().subscribe({
      next: (adm) => {
        this.owners = adm.map((adm) => adm.name);
      },
    });
  }

  create() {
    console.log(this.storage);
    this.storageService.create(this.storage).subscribe(() => {
      alert('Armazém cadastrado com sucesso!');
    });
  }
}
