import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './CustomButton';

export default class Signup extends Component {
    state = {
      first_name: '',
      last_name: '',
      age: '',
      gender: '',
      max_run_distance: 1,
      estimated_mile_pace: '',
    }

createUserCredentials(props){
  console.log('signup')
  this.props.navigation.navigate('User')
}

  render() {
    console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <View style={styles.directions}>
          <Text style={styles.text}>Please enter your information.</Text>
          <Text style={styles.text}>All fields required:</Text>
        </View>
        <TextInput
        type='text'
        name='first_name'
        value={this.state.first_name}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='First Name'
        onChange={(e) => {
          this.setState({username: e.nativeEvent.text})
        }}
        />
        <TextInput
        type='text'
        name='last_name'
        value={this.state.last_name}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='Last Name'
        onChange={(e) => {
          this.setState({password: e.nativeEvent.text})
        }}
        />
        <TextInput
        type='text'
        name='age'
        value={this.state.age}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='Age'
        onChange={(e) => {
          this.setState({username: e.nativeEvent.text})
        }}
        />
        <TextInput
        type='text'
        name='gender'
        value={this.state.gender}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='Gender'
        onChange={(e) => {
          this.setState({password: e.nativeEvent.text})
        }}
        />
        <TextInput
        type='number'
        name='max_run_distance'
        value={this.state.max_run_distance}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='Max Run Distance'
        onChange={(e) => {
          this.setState({username: e.nativeEvent.text})
        }}
        />
        <TextInput
        type='text'
        name='estimated_mile_pace'
        value={this.state.estimated_mile_pace}
        style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 250, marginBottom: 15, paddingLeft: 10}}
        placeholder='Estimated Pace per Mile'
        onChange={(e) => {
          this.setState({password: e.nativeEvent.text})
        }}
        />
        <CustomButton
        title='Submit'
        color='green'
        accesibilityLabel='Submit your profile information'
        onPress={(props) => this.createUserCredentials(props)}
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
    marginBottom: 100,
  },
  directions: {

    paddingVertical: 15,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  }
})
