import React, { useEffect, FC } from 'react';
import { View, Text } from 'react-native';
/**types */
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'User'>,
  route: RouteProp<RootStackParamList, 'User'>
}

export const UserScreen: FC<Props> = ({ navigation, route }: Props) => {

  return (
    <View>
      <Text>user screen</Text>
    </View>
  );
}