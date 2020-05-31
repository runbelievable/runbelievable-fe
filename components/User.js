import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { getSingleUser } from '../apiCalls';

export default class User extends Component {

  componentDidMount() {
    getSingleUser(this.props.route.params.userInfo.id)
      .then(user => this.setState({ userInfo: user.data }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation}/>
        <Text>{this.props.route.params.userInfo.attributes.first_name}</Text>
          <Text>Favorite Routes</Text>
        <Text>Pace: {this.props.route.params.userInfo.attributes.estimated_mile_pace}/ min</Text>
        <Text>Location: {this.props.route.params.userInfo.attributes.location}</Text>
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
