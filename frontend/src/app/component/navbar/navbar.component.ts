import { Component } from '@angular/core';
import { Routes as RoutesEnum } from 'src/app/constants/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes = RoutesEnum;
  constructor() { }

}
