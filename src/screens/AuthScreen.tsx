import React, { FC, useEffect} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  ActivityIndicator,
  Text,
} from 'react-native';
import { signin } from '../plugins/firebase';
// import { initialUser } from '../types/User';

export const AuthScreen: FC = () => {

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      console.log(user);//現状undefined
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size='large' />
      <Text style={styles.text}>ログイン中...</Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});