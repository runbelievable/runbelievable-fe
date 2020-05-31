import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './CustomButton';
import { validateUser } from '../apiCalls';

export default class Login extends Component {
    state = {
      username: '',
      password: '',
      error: ''
    }

  submitUserCredentials(props){
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ error: 'Please enter a valid username and password.'})
    } else {
      this.validateUserInfo()
      this.setState({ username: '', password: '' })
    }
  }

  validateUserInfo(props) {
      validateUser(this.state.username, this.state.password)
      .then(response => {
        if (response.ok) {
          console.log('a ok');
          this.props.navigation.navigate('User')
        } else {
          Alert.alert('no')
        }
      })
      .catch(error => console.log(error))
  }


  render() {
    let pageView =
    <View>
    <Text style={styles.instructions}>Enter your username and password:</Text>
    <TextInput
    type='email'
    name='username'
    value={this.state.username}
    style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
    placeholder='username'
    onChange={(e) => {
      this.setState({username: e.nativeEvent.text, error: ''})
    }}
    />
    <TextInput
    type='password'
    name='password'
    onChange={(e) => {
      this.setState({password: e.nativeEvent.text, error: ''})
    }}
    value={this.state.password}
    style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
    placeholder='password'
    />
    <CustomButton
    title='Submit'
    color='green'
    accesibilityLabel='Submit your login information'
    onPress={(props) => this.submitUserCredentials(props)}
    />
    </View>

      if (this.state.error) {
        return (
          <View style={styles.container}>
            <Text>{this.state.error}</Text>
            {pageView}
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            {pageView}
          </View>
        )
      }

    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 400,
  },
  instructions: {
    fontSize: 22,
    marginBottom: 15,
  }
})
