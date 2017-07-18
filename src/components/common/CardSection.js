import React from 'react';
import { View } from 'react-native';

export const CardSection = ({ children }) => {
  const { containerStyle } = styles;
  
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#fff',
    position: 'relative'
  }
};

