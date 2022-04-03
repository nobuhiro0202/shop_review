import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/**navigator */
import { MainTabNavigator } from './MainTabNavigator';
/**screens */
// import { AuthScreen } from '../screens/AuthScreen';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}