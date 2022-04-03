import { firestore } from "../plugins/firebase";
import {
  getDocs,
  collection,
  query,
  orderBy,
} from 'firebase/firestore'
import { Shop } from '../types/Shop';

export const getShops = async () => {
  const q = query(
    collection(firestore, 'shops'),
    orderBy('score', 'desc'),
  );
  const snapshot = await getDocs(q);
  const shops = snapshot.docs.map(doc => doc.data() as Shop);
  return shops;
}