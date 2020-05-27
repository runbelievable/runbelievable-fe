import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const CustomButton = props => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={{...styles.buttonText, ...props.textStyling}}>
        {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'darkorange',
    paddingVertical: 10,
    width: 100,
    borderRadius: 15,
  },
  buttonText:{
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  }
})

export default CustomButton;
