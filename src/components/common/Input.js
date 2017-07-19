import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 100,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    color: '#000',
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 1
  },
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
