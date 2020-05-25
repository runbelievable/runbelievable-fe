import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import CustomButton from './CustomButton';


export default function Homepage() {
  return (
    <View>
      <Text style={styles.title}>Runbelievable</Text>
      <Image source={require('/Users/mandyalford/turing/mod4/projects/runbelievable-fe/assets/colored-silhouettes-runners_23-2147619177.jpg')} style={{height:380, width:380}}/>
      <Text style={styles.greeting}>Welcome, Runner!</Text>
      <Button style={styles.buddyButton}title='Find a RunBuddy'
      color='green'
      accesibilityLabel='find a run buddy'/>
    </View>
  )
}

const styles = StyleSheet.create({
  buddyButton: {
    borderWidth: 1,
    borderColor: 'red',
    height: 3,
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 20,
  }
})
