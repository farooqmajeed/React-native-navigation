/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './App/components/Main'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class githubNotetaker extends Component {
  render() {
    return (
        <StackNavigator
        style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
