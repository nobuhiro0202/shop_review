import React, { useEffect, FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
/**component */
import { ShopDetail } from '../components/ShopDetail';
import { FloatingActionButton } from '../components/FloatingActionButton';
/**types */
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Shop'>,
  route: RouteProp<RootStackParamList, 'Shop'>
}

export const ShopScreen: FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: shop.name });
  }, [shop]);

  return (
    <SafeAreaView style={styles.container}>
      <ShopDetail shop={shop} />
      <FloatingActionButton iconName='plus' onPress={() => navigation.navigate('CreateReview', { shop })} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});