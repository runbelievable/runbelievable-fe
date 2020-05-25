import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const SearchButton = props => {
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
    alignSelf: 'center',
    backgroundColor: 'darkorange',
    marginTop: 30,
    paddingVertical: 15,
    width: 250,
    borderRadius: 15,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})

export default SearchButton;
