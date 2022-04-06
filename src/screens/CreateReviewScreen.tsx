import React, { FC } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Text
} from 'react-native';

export const CreateReviewScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>create View screeeeeen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});