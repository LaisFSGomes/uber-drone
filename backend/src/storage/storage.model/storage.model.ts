import * as mongoose from 'mongoose';
// export class StorageModel {}
export const StorageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});
export interface Storage {
  id: string;
  name: string;
  owner: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
