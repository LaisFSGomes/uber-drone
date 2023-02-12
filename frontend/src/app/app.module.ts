import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterUserComponent } from './features/register-user/register-user.component';
import { ListUserComponent } from './features/list-user/list-user.component';
import { RegisterStorageComponent } from './features/register-storage/register-storage.component';
import { ListStorageComponent } from './features/list-storage/list-storage.component';
import { RegisterAdmComponent } from './features/register-adm/register-adm.component';
import { ListAdmComponent } from './features/list-adm/list-adm.component';
import { RegisterDroneComponent } from './features/register-drone/register-drone.component';
import { ListDroneComponent } from './features/list-drone/list-drone.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterUserComponent,
    ListUserComponent,
    RegisterStorageComponent,
    ListStorageComponent,
    RegisterAdmComponent,
    ListAdmComponent,
    RegisterDroneComponent,
    ListDroneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
