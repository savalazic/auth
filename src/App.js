import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: null
  };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAXvtStcALQl0vwqJtKUP8Aw4DDSS-8A94',
      authDomain: 'auth-6949e.firebaseapp.com',
      databaseURL: 'https://auth-6949e.firebaseio.com',
      projectId: 'auth-6949e',
      storageBucket: 'auth-6949e.appspot.com',
      messagingSenderId: '385741702759'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 45 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Auth' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
