import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAXvtStcALQl0vwqJtKUP8Aw4DDSS-8A94',
      authDomain: 'auth-6949e.firebaseapp.com',
      databaseURL: 'https://auth-6949e.firebaseio.com',
      projectId: 'auth-6949e',
      storageBucket: 'auth-6949e.appspot.com',
      messagingSenderId: '385741702759'
    });
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Auth' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
