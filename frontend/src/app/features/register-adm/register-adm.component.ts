import { Component } from '@angular/core';
import { AdmTypes } from 'src/app/templates/admTypes';
import { AdministratorService } from 'src/app/service/administrator.service';

@Component({
  selector: 'app-register-adm',
  templateUrl: './register-adm.component.html',
  styleUrls: ['./register-adm.component.scss'],
})
export class RegisterAdmComponent {
  adm: AdmTypes = {
    id:'',
    name: '',
    email: '',
    password: '',
  };
  constructor(private admService: AdministratorService) {}

  create() {
    console.log(this.adm);
    this.admService.create(this.adm).subscribe(() => {
      alert('Administrador cadastrado com sucesso!');
    });
  }
}
