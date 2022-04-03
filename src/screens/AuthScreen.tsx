import { 
  onAuthStateChanged, 
  signInAnonymously 
} from 'firebase/auth';
import React, { FC, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  ActivityIndicator,
  Text,
} from 'react-native';
import { auth } from '../plugins/firebase';
import { initialUser } from '../types/User';

export const AuthScreen: FC = () => {

  useEffect(() => {
      signInAnonymously(auth);
      onAuthStateChanged(auth, user => {
        const uid = user?.uid;
        if (!user) {
          return {...initialUser, id: uid}
        } else {
          return {id: uid, user};
        }
      })
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