import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';

export default function User({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Text>MandyPants</Text>
      <Text>Favorite Routes</Text>
      <Text>Pace: 12/min </Text>
      <Text>Location: Atlanta, GA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
})
