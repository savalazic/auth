//import liraries
import React, { Component } from 'react';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

// create a component
class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);

    console.log(email, password);
  }

  render() {
    return (
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
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//make this component available to the app
export default LoginForm;
