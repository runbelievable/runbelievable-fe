import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Header({navigation}) {
  return (
    <View style={styles.navigationContainer}>
      <Button titleStyle={{fontSize: 500}}
      title='Filter'
      color='white'
      accesibilityLabel='filter results'
      />
      <Button style={styles.navButton}
      title='Profile'
      color='white'
      accesibilityLabel='view your profile'
      onPress={() => navigation.navigate('User')}
      />
      <Button style={styles.navButton}
      title='Chat'
      color='white'
      accesibilityLabel='view your chats'
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
  navButton: {
    color: 'pink',
  },
})