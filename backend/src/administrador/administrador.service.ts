import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Administrador } from './administrador.model/administrador.model';
7;

@Injectable()
export class AdministradorService {
  constructor(
    @InjectModel('Administrador')
    private readonly administradorModel: Model<Administrador>,
  ) {}

  async create(administrador: Administrador) {
    const createdAdministrador = await new this.administradorModel(
      administrador,
    ).save();
    return {
      message: 'Administrator created successfully',
      administrador: {
        id: createdAdministrador.id,
        name: createdAdministrador.name,
        email: createdAdministrador.email,
        password: createdAdministrador.password,
      },
    };
  }
  getAllAdministrator() {
    const administradores = this.administradorModel.find().exec();
    return administradores;
  }
}
