import { FirebaseApp, getApps, initializeApp } from 'firebase/app'
import { 
  getFirestore,
  doc
 } from 'firebase/firestore'
import { getAuth, signInAnonymously } from "firebase/auth";
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

export const signin = async () => {
  const auth = getAuth();
  const userCredentials = await signInAnonymously(auth);
  const { uid } = userCredentials?.user;
  const userRef = doc(firestore, 'users', uid);
  // if(!userRef)
}