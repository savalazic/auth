//import liraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';

import { Button, Card, CardSection, Input } from './common';

// create a component
class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => { // if error
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => { // another error
            this.setState({ error: 'Authentication failed' });
          });
      });

    this.refs.errorText.transitionTo({ translateX: 0 });

    console.log(email, password);
  }

  render() {
    return (
      <Animatable.View animation='zoomInUp'>
        <Card>
          <CardSection>
            <Input
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              label='Email'
              placeholder='user@domain.com'
            />
          </CardSection>
          <CardSection>
            <Input 
              value={this.state.password}
              label='Password'
              onChangeText={password => this.setState({ password })}
              placeholder='***********'
              secureTextEntry
            />
          </CardSection>

          <Animatable.Text ref='errorText' style={styles.error}>{this.state.error}</Animatable.Text>

          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this)}
            >
              Login
            </Button>
          </CardSection>
        </Card>
      </Animatable.View>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    transform: [
      { translateX: -100 }
    ]
  }
};

//make this component available to the app
export default LoginForm;
