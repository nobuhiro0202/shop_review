import { FirebaseApp, getApps, initializeApp } from 'firebase/app'
import { 
  getFirestore,
  doc,
  setDoc
 } from 'firebase/firestore'
import { 
  getAuth, 
  signInAnonymously,
  onAuthStateChanged,
 } from "firebase/auth";
import Constants from "expo-constants";
import { User, initialUser } from '../types/User';

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
  onAuthStateChanged(auth, async user => {
    const userDoc = doc(firestore, 'users', uid);
    if (!user) {
      await setDoc(userDoc, initialUser);
      return {
        ...initialUser,
        id: uid
      } as User;
    } else {
      return {
        id: uid,
      };
    }
  })
};