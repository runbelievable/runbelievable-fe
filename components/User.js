import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { getSingleUser } from '../apiCalls';

export default function User ({navigation, route}){
  if(!route.params.buddyInfo) {
    console.log('in user', route.params.userInfo.id)
      return (
        <View style={styles.container}>
          <Header
          userId={route.params.userInfo.id}
          navigation={navigation}
          />
          <Text style={styles.username}>{route.params.userInfo.attributes.username}</Text>
          <Text style={styles.details}>{route.params.userInfo.attributes.first_name}</Text>
          <Text style={styles.details}>Age: {route.params.userInfo.attributes.age}</Text>
          <Text style={styles.details}>Gender: {route.params.userInfo.attributes.gender}</Text>
          <Text style={styles.details}>Pace: {route.params.userInfo.attributes.estimated_mile_pace}/ min</Text>
          <Text style={styles.details}>Run Distance: {route.params.userInfo.attributes.max_run_distance}/ min</Text>
          <Text style={styles.details}>Location: {route.params.userInfo.attributes.location}</Text>
          <Button
          title='Find Buddies'
          onPress={() => {navigation.navigate('Buddies', {
            userId: route.params.userInfo.id
          })}}/>
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
  username: {
    fontSize: 30,
    color: 'darkorange',
    marginBottom: 10,
  },
  details: {
    marginBottom: 10,
  }
})
