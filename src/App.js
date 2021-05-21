import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './config/router'

export default class App extends React.Component {

  render() {
    return (
        <NavigationContainer>
          <Router />
        </NavigationContainer>
    );
  }
}