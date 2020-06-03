import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import SearchButton from './SearchButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';

export default function Homepage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Runbelievable</Text>
      <Image source={require('../assets/colored-silhouettes-runners_23-2147619177.jpg')} style={{height:380, width:380}}/>
      <Text style={styles.greeting}>Welcome, Runner!</Text>
      <SearchButton
      title='Log In'
      accesibilityLabel='log in to your account'
      onPress={() => navigation.navigate('Login')}
      />
      <View style={styles.signup}>
        <Text>Not a member?</Text>
        <Button
        title='Sign up'
        onPress={() => navigation.navigate('Signup')}
        />
      </View>
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
  signup: {
    marginBottom: 30,
  },
  title: {
    fontSize: 55,
    textAlign: 'center',
    paddingVertical: 1,
  },
  greeting: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 20,
  }
})
