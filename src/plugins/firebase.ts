import { FirebaseApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";

function getFirebaseApp(): FirebaseApp {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }
  return initializeApp(Constants?.manifest?.extra?.firebase);
}

const app = getFirebaseApp();
export const firestore = getFirestore(app);
export const auth = getAuth(app);