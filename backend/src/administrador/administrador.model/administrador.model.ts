import * as mongoose from 'mongoose';
// export class AdministradorModel {}
export const AdministradorSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
});
export interface Administrador {
  nome: string;
  email: string;
  senha: string;
}
