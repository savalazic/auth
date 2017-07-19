//import liraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';

import { Button, Card, CardSection, Input, Spinner } from './common';

// create a component
class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      email: '',
      password: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => { // if error
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });

    this.refs.errorText.transitionTo({ translateX: 0 });

    console.log(email, password);
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFail() {
    this.setState({
      email: '',
      password: '',
      error: 'Authentication failed',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Login
      </Button>
    );
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
            {this.renderButton()}
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
