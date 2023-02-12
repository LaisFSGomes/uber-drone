export interface coordenadasType {
  latitude: number;
  longitude: number;
}

export interface StorageType {
  _id?: string;
  name: string;
  owner: string;
  coordinates: coordenadasType;
}
