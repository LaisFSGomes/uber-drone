import { userType } from './../../templates/usersType';
import { UserService } from 'src/app/service/user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {

  usersList: userType[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.list().subscribe({
      next: (users) => {
        this.usersList = users;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log(this.usersList);
      }
    })
  }

}
