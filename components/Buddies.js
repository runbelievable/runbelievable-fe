import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';

function Runner({ title, pace, location, navigation }) {
  return (
     <TouchableOpacity onPress={() => alert("pressed!")}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.pace}>{pace}/min</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default class Buddies extends Component {
  state = {
    buddiesData: []
  }

  componentDidMount() {
    fetch('https://run-be.herokuapp.com/api/v1/users')
      .then(response => response.json())
      .then(buddiesData => this.setState({ buddiesData: buddiesData.data }))
      .catch(error => console.log(error))
  }

  onPress = () => {
    Alert.alert('I was pressed!')
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Header navigation={this.props.navigation}/>
          <FlatList
            key={Date.now()}
            data={this.state.buddiesData}
            renderItem={({ item }) =>
            <Runner
            title={item.attributes.username}
            pace={item.attributes.estimated_mile_pace}
            location={item.attributes.location}
            onPress={this.onPress}
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
