import * as mongoose from 'mongoose';
// export class AdministradorModel {}
export const AdministradorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
export interface Administrador {
  name: string;
  email: string;
  password: string;
}
