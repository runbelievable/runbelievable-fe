import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { getSingleUser } from '../apiCalls';

export default function Buddy ({navigation, route}){
  console.log('navigation', navigation)
  console.log('route', route)
  return (
    <View style={styles.container}>
      <Header
      userId={route.params.buddyInfo.id}
      navigation={navigation}
      />
      <Text
      style={styles.username}>
        {route.params.buddyInfo.attributes.username}</Text>
      <Text style={styles.details}>{route.params.buddyInfo.attributes.first_name}</Text>
      <Text style={styles.details}>Age: {route.params.buddyInfo.attributes.age}</Text>
      <Text style={styles.details}>Gender: {route.params.buddyInfo.attributes.gender}</Text>
      <Text style={styles.details}>Pace: {route.params.buddyInfo.attributes.estimated_mile_pace}/ min</Text>
      <Text style={styles.details}>Run Distance: {route.params.buddyInfo.attributes.max_run_distance}/ min</Text>
      <Text style={styles.details}>Location: {route.params.buddyInfo.attributes.location}</Text>
      <Button
      title={`Chat with ${route.params.buddyInfo.attributes.first_name}`}
      onPress={() => {navigation.navigate('Chat', {
        username: route.params.buddyInfo.attributes.username,
        userId: route.params.userId
      })}}/>
    </View>
  )
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
