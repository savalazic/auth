//import liraries
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// create a component
export const Spinner = ({ size }) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator 
        size={size || 'large'}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
