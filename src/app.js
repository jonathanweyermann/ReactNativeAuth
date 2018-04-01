import React, { Component } from 'react'
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBRgnxcyjdAcqJ0xR9co2woGt42blUBncQ',
      authDomain: 'authentication-7c354.firebaseapp.com',
      databaseURL: 'https://authentication-7c354.firebaseio.com',
      projectId: 'authentication-7c354',
      storageBucket: 'authentication-7c354.appspot.com',
      messagingSenderId: '314437437793'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
