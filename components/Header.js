import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Header({navigation, userId}) {
  console.log('userId', userId)
  return (
    <View style={styles.navigationContainer}>
      <Button
      title='Trail'
      color='white'
      accesibilityLabel='find a random trail'
      onPress={() => navigation.navigate('Trail')}
      />
      <Button
      title='Profile'
      color='white'
      accesibilityLabel='view your profile'
      onPress={() => navigation.navigate('User', {
        userId: userId
      })}
      />
      <Button
      title='Chat'
      color='white'
      accesibilityLabel='view your chats'
      onPress={() => navigation.navigate('Chat', {
        userId: userId
      })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: 'darkorange',
    display: 'flex',
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
})
