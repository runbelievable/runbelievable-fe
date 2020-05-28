import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './CustomButton';

export default class Login extends Component {
    state = {
      username: '',
      password: '',
    }



    // divb.addEventListener('click', function(e) {
    //   savedEvent = e;
    //   savedTarget = e.currentTarget;
    //   setTimeout(function() {
    //     console.log('b: currentTarget is now ' + e.currentTarget);
    //   }, 0);
    // }, false);


  // updateUserName = (event) => {
  //   var savedEvent;
  //   var savedTarget;
  //
  //   savedEvent = event;
  //   savedTarget = event.currentValue;
  //   // event.preventDefault();
  //   // console.log(savedEvent)
  //   console.log(savedTarget)
  //   // let value= event.target && event.target.value
  //   this.setState({username: event.target}, () => {console.log(this.state)})
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Enter your username and password:</Text>
        <TextInput
        type='email'
        name='username'
        value={this.state.username}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='username'
        onChange={(e) => {
          this.setState({username: e.nativeEvent.text})
        }}
        />
        <TextInput
        type='password'
        name='password'
        onChange={(e) => {
          this.setState({password: e.nativeEvent.text})
        }}
        // value={this.state.password}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='password'
        />
        <CustomButton
        title='Submit'
        color='green'
        accesibilityLabel='Submit your login information'
        onPress={(e) => {
          console.log(this.state)
        }}
        />
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
