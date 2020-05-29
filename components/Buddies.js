import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import getAllUsers from './apiCalls';


function Runner({ title, pace, location }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.pace}>{pace}/min</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
}

export default class Buddies extends Component {
  state = {
    buddiesData: []
  }

  componentDidMount() {
    fetch('https://run-be.herokuapp.com/api/v1/users')
      .then(response => response.json())
      .then(buddiesData => this.setState({ buddiesData: buddiesData.data}, () => console.log(this.state)))
      .catch(error => console.log(error))
  }
  
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Header navigation={this.props.navigation}/>
          <FlatList
            data={this.state.buddiesData}
            renderItem={({ item }) => <Runner title={item.attributes.username}
            pace={item.attributes.estimated_mile_pace}
            location={item.attributes.location}
            />}
            keyExtractor={runner => runner.attributes.id}
          />
        </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  item: {
    borderColor: 'darkorange',
    borderWidth: 2,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 380,
  },
  pace: {
    fontSize: 18,
  },
  location: {
    fontSize: 18,
  },
  title: {
    fontSize: 22,
  }
});
