import { Shop } from './Shop';

export interface RootStackParamList {
  Main: undefined,
  Home: undefined,
  Shop: { shop: Shop },
  User: undefined,
  CreateReview: { shop: Shop },
}