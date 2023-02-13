import { AdministratorService } from './../../service/administrator.service';
import { Component } from '@angular/core';
import { AdmTypes } from 'src/app/templates/admTypes';

@Component({
  selector: 'app-list-adm',
  templateUrl: './list-adm.component.html',
  styleUrls: ['./list-adm.component.scss']
})
export class ListAdmComponent {
  admList: AdmTypes[] = [];

    constructor(private admService: AdministratorService) { }

    ngOnInit(): void {
      this.admService.list().subscribe({
        next: (adm) => {
          this.admList = adm;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

}
