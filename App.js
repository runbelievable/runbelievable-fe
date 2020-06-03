import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Homepage from './components/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buddies from './components/Buddies';
import User from './components/User';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Trail from './components/Trail';
import Buddy from './components/Buddy';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Buddies" component={Buddies} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Trail" component={Trail} />
      <Stack.Screen name="Buddy" component={Buddy} />

    </Stack.Navigator>
  </NavigationContainer>

  );
}
