import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { getBuddies } from '../apiCalls';


function Runner({ title, pace, location, navigation, userInfo, userId }) {
  return (
     <TouchableOpacity
     onPress={() => navigation.navigate('Buddy', {
       buddyInfo: userInfo,
       userId: userId
     })}>
      <View
      style={styles.item}>
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
    const currentId = this.props.route.params.userId
    getBuddies(currentId)
      .then(buddiesData => this.setState({ buddiesData: buddiesData.data }))
      .catch(error => console.log(error))
  }

  onPress = () => {
    Alert.alert('I was pressed!')
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Header
          userId={this.props.route.params.userId} navigation={this.props.navigation}/>
          <FlatList
            data={this.state.buddiesData}
            renderItem={({ item }) =>
            <Runner
            key={item.id}
            userId={this.props.route.params.userId}
            userInfo={item}
            navigation={this.props.navigation}
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
