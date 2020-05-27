import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './CustomButton';

export default class Login extends Component {
  constructor({navigation}){
    super({navigation});
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Enter your username and password:</Text>
        <TextInput
        type='email'
        value={this.state.username}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='username'
        />
        <TextInput
        type='password'
        value={this.state.password}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='password'
        />
        <CustomButton
        title='Submit'
        color='green'
        accesibilityLabel='Submit your login information'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    marginBottom: 400,
  },
  instructions: {
    fontSize: 22,
    marginBottom: 15,
  }
})
