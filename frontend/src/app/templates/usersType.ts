export interface coordenadasType {
  latitude: number;
  longitude: number;
}

export interface userType {
  _id?: string;
  name: string;
  email: string;
  password: string;
  coordinates: coordenadasType;
}
export interface userResponseType {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    coordinates: coordenadasType;
  }
}
