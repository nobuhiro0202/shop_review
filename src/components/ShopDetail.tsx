import React, { FC } from 'react';
import { 
  Image, 
  Text,
  View
} from 'react-native';
/** styles  */
import { styles } from '../styles/Style';
/* components */
import { Stars } from './Stars';
/*  types */
import { Shop } from '../types/Shop';

interface Props {
  shop: Shop
}

export const ShopDetail: FC<Props> = ({ shop }: Props) => {
  const { name, place, imageUrl, score } = shop;

  return (
    <View style={styles.sdContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageContainer} source={{uri: imageUrl}} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.place}>{place}</Text>
        </View>
        <View style={styles.dsContainer}>
          <Stars score={score} starSize={28} textSize={20} />
        </View>
      </View>
    </View>
  );
}