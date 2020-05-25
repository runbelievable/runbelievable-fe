import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';


const BUDDIESDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tanisha',
    pace: 11,
    location: 'Denver, CO',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Mandy',
    pace: 12,
    location: 'Atlanta, GA',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Alex',
    pace: 10,
    location: 'Boulder, CO',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d88',
    title: 'Pierce',
    pace: 9,
    location: 'Ft. Collins, CO',
  },
];

function Runner({ title, pace, location }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.pace}>{pace}/min</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
}

export default function Buddies() {
  return (
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={BUDDIESDATA}
          renderItem={({ item }) => <Runner title={item.title} pace={item.pace}
          location={item.location}/>}
          keyExtractor={runner => runner.id}
        />
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
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
