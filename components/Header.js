import * as React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import CustomButton from './CustomButton';

export default function Header() {
  return (
    <View style={styles.navigationContainer}>
      <CustomButton
      title='Filter'
      color='blue'
      accesibilityLabel='filter results'
      />
      <CustomButton
      title='Profile'
      color='green'
      accesibilityLabel='view your profile'
      />
      <CustomButton
      title='Chat'
      color='purple'
      accesibilityLabel='view your chats'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-between',
    marginBottom: 40,
  }
})
