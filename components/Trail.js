import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, Button, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { findRandomTrail } from '../apiCalls';


export default class Trail extends Component {
  state = {
    randomTrail: {}
  }

  componentDidMount() {
    this.getAnotherRandomTrail()
  }

  getAnotherRandomTrail = () => {
    findRandomTrail()
      .then(data => this.setState({ randomTrail: data.data.attributes }))
  }

  render() {
      return (
        <View style={styles.container}>
          <Header
            navigation={this.props.navigation}
            userId={this.props.route.params.userId}
          />
          <Text style={styles.heading}>Here's a trail you might like!</Text>
          <Text style={styles.textSpacing}>Trail Name: {this.state.randomTrail.name}</Text>
          <Text>Summary</Text>
          <Text style={styles.details}>{this.state.randomTrail.summary}</Text>
          <Text style={styles.textSpacing}>Location: {this.state.randomTrail.location}</Text>
          <Text style={styles.textSpacing}>Length: {this.state.randomTrail.length} miles</Text>
          <Text
          style={{color: 'blue', paddingHorizontal: 30, marginBottom: 10}}
          onPress={() => Linking.openURL(this.state.randomTrail.url)}>
          {this.state.randomTrail.url}
          </Text>
          <Button
            title='Try another trail'
            color='darkorange'
            onPress={() => this.getAnotherRandomTrail()}
          />
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 15
  },
  activityIndicator: {
    marginTop: 50
  },
  details: {
    paddingHorizontal: 30,
    marginBottom: 10
  },
  textSpacing: {
    marginBottom: 10
  }
})
