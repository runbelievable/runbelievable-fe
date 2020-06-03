import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { getSingleUser } from '../apiCalls';

export default function Buddy ({navigation, route}){
  console.log('Buddy logged in user', route.params.userId)
  console.log('buddys info', route.params.buddyInfo )
  return (
    <View style={styles.container}>
      <Header
      userId={route.params.buddyInfo.id}
      navigation={navigation}
      />
      <Text>{route.params.buddyInfo.attributes.first_name}</Text>
        <Text>Favorite Routes</Text>
      <Text>Pace: {route.params.buddyInfo.attributes.estimated_mile_pace}/ min</Text>
      <Text>Location: {route.params.buddyInfo.attributes.location}</Text>
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
})
