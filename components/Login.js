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

submitUserCredentials(props){
  this.props.navigation.navigate('User')
  this.setState({ username: '', password: '' })
}

  render() {
    console.log(this.props.navigation)
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
    )
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
