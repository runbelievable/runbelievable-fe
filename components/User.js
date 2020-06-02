import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
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
          <Text>{route.params.userInfo.attributes.first_name}</Text>
            <Text>Favorite Routes</Text>
          <Text>Pace: {route.params.userInfo.attributes.estimated_mile_pace}/ min</Text>
          <Text>Location: {route.params.userInfo.attributes.location}</Text>
        </View>
      )
  } else {
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
            username: route.params.buddyInfo.attributes.username
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
})
