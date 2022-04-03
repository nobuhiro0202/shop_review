import firebase from 'firebase/app'

export interface User {
  id?: string,
  name: string,
  createdAt: firebase.firestore.Timestamp,
  updatedAt: new Date(),
}

export const initialUser = {
  name: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};