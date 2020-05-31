import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { getSingleUser } from '../apiCalls';

export default class User extends Component {
  state: {
    userInfo: {}
  }

  componentDidMount() {
    console.log(this.props.route.params.userInfo)
    getSingleUser(this.props.route.params.userInfo)
      .then(user => this.setState({ userInfo: user.data}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation}/>
        <Text>{`${this.state.userInfo.data.attributes.first_name} ${this.state.userInfo.data.attributes.last_name}`}</Text>
        <Text>Favorite Routes</Text>
        <Text>Pace: {this.state.userInfo.data.attributes.estimated_mile_pace}/ min</Text>
        <Text>Location: {this.state.userInfo.data.attributes.location}</Text>}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
})
