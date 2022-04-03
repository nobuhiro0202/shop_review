import React from 'react';
import { 
  Image, 
  Text,
  TouchableOpacity
} from 'react-native';
/**style */
import { styles } from '../styles/Style';
/**component */
import { Stars } from './Stars';
/**types */
import { Shop } from '../types/Shop';

interface Props {
  shop: Shop
  onPress: () => void
}


export const ShopReviewItems: React.FC<Props> = ({ shop, onPress }: Props) => {
  const { name, place, imageUrl, score } = shop;

  return (
    <TouchableOpacity style={styles.reviewContainer} onPress={onPress} >
      <Image source={{ uri: imageUrl }} style={styles.image}  />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.placeText}>{place}</Text>
      <Stars score={score} />
    </TouchableOpacity>
    );
}