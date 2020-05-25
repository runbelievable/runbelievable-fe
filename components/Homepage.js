import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import SearchButton from './SearchButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';

export default function Homepage({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Runbelievable</Text>
      <Image source={require('/Users/mandyalford/turing/mod4/projects/runbelievable-fe/assets/colored-silhouettes-runners_23-2147619177.jpg')} style={{height:380, width:380}}/>
      <Text style={styles.greeting}>Welcome, Runner!</Text>
      <SearchButton
      title='Find a RunBuddy'
      color='green'
      accesibilityLabel='find a run buddy'
      onPress={() => navigation.navigate('Buddies')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buddyButton: {
    borderWidth: 1,
    borderColor: 'red',
    height: 3,
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    paddingVertical: 10,
  },
  greeting: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 20,
  }
})
