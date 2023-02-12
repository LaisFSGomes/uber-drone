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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
