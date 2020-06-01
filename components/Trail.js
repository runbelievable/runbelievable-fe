import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { findRandomTrail } from '../apiCalls';


export default function Trail() {

  const getNewTrail = () => {
    findRandomTrail()
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Here's a trail you might like!</Text>
      <Text>Trail Name</Text>
      <Text>Summary</Text>
      <Text>Location</Text>
      <Text>Length</Text>
      <Text
      style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
      http://google.com
      </Text>
      <Button
        title='Try another trail'
        color='darkorange'
        onPress={() => getNewTrail() }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 15
  }
})
