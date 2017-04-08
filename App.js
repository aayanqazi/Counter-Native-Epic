import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/Store';
import {Header,Card,CardSection,Button} from './src/Components/';
import Main from './src/Container/main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
      <Main />
      </Provider>
    );
  }
}

