import { StorageType } from './../../templates/storageTypes';
import { StorageService } from './../../service/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrls: ['./list-storage.component.scss']
})
export class ListStorageComponent {

  storageList: StorageType[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.list().subscribe({
      next: (storages) => {
        this.storageList = storages;
      },
      error: (err) => {
        console.log("erro", err);
      },
      complete: () => {
        console.log(this.storageList);
      }
    })
  }
}
