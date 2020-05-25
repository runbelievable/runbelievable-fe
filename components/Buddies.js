import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';

export default function Buddies({navigation}) {
  return (
    <View>
      <Header />
      <Text style={styles.title}>Available Buddies</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buddyButton: {
    borderWidth: 1,
    borderColor: 'red',
    height: 3,
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 20,
  }
})
