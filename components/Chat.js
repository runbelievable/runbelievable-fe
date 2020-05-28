import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import SearchButton from './SearchButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';

export default class Chat extends Component {
  state = {
    message: ''
  }

  render() {
    return(
      <Text>This is chat</Text>
    )
  }
}
