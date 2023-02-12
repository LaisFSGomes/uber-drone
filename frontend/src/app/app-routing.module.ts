import { ListDroneComponent } from './features/list-drone/list-drone.component';
import { RegisterDroneComponent } from './features/register-drone/register-drone.component';
import { ListAdmComponent } from './features/list-adm/list-adm.component';
import { RegisterAdmComponent } from './features/register-adm/register-adm.component';
import { ListStorageComponent } from './features/list-storage/list-storage.component';
import { RegisterStorageComponent } from './features/register-storage/register-storage.component';
import { ListUserComponent } from './features/list-user/list-user.component';
import { RegisterUserComponent } from './features/register-user/register-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Routes as RoutesEnum} from './constants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cadastro-user',
    pathMatch: 'full',
  },
  {
    path: RoutesEnum.registerUser,
    component: RegisterUserComponent,
  },
  {
    path: RoutesEnum.listUser,
    component: ListUserComponent,
  },
  {
    path: RoutesEnum.registerStorage,
    component: RegisterStorageComponent,
  },
  {
    path: RoutesEnum.listStorage,
    component: ListStorageComponent,
  },
  {
    path: RoutesEnum.registerAdm,
    component: RegisterAdmComponent,
  },
  {
    path: RoutesEnum.listAdm,
    component: ListAdmComponent,
  },
  {
    path: RoutesEnum.registerDrone,
    component: RegisterDroneComponent,
  },
  {
    path: RoutesEnum.listDrone,
    component: ListDroneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
