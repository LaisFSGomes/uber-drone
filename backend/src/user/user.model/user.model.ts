import * as mongoose from 'mongoose';
// export class UserModel {}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
