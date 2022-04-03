import { useEffect, useState  } from 'react';
import { 
  View, 
  FlatList
} from 'react-native';
import { Shop } from '../types/Shop';
import { getShops } from '../lib/GetShop';
import { ShopReviewItems } from '../components/ShopReviewItem';
import { styles } from '../styles/Style';

/**types */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> 
}

export const HomeScreen = ({ navigation }: Props) => {
  const [ shops , setShops ] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);
  
  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  }

  const onPressShop = (shop: Shop) => {
    navigation.navigate('Shop', { shop });
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => <ShopReviewItems shop={item} onPress={() => onPressShop(item)}  /> }
        keyExtractor={(item, i) => i.toString()}
        numColumns={2}
      />
    </View>
  );
}

