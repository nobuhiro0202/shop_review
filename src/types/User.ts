import { Timestamp } from 'firebase/firestore'

export interface User {
  id?: string,
  name: string,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

export const initialUser = {
  name: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};