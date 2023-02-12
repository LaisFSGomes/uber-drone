import { Controller, Body, Delete, Get, Param, Post } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { Administrador } from './administrador.model/administrador.model';

@Controller('administrator')
export class AdministradorController {
  constructor(private administradorService: AdministradorService) {}

  @Post('/create')
  createAdministrador(@Body() administrador: Administrador) {
    return this.administradorService.create(administrador);
  }
  @Get('/administrators')
  getAllAdministradores() {
    return this.administradorService.getAllAdministrator();
  }
}
