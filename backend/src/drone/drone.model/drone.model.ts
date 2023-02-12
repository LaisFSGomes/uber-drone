import * as mongoose from 'mongoose';
// export class DroneModel {}
export const DroneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  storage: { type: String, required: true },
  speed: { type: Number, required: true },
});
export interface Drone {
  name: string;
  storage: string;
  speed: number;
}
