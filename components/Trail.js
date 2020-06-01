import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';


export default function App() {

  return (
    <View>
      <Header />
      <Text>Trail Name</Text>
      <Text>Summary</Text>
      <Text>Location</Text>
      <Text>Length</Text>
      <Text
      style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
      http://google.com
      </Text>
    </View>
  )

}
