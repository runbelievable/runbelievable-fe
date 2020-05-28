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
    <View style={styles.container}>
      <Header navigation={this.props.navigation}/>
      <Text style={styles.message}>You have no chats. Find a buddy and start a chat!</Text>
      <Image source={require('../assets/chat.jpg')} style={{height:380, width:380}}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 22,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
  }
})
