import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';
import SearchButton from './SearchButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { GiftedChat } from 'react-native-gifted-chat'

function Message() {
    return(
      <View style={styles.sentMessage}>
      <Text> Test
      </Text>
      </View>
    )
}

export default class Chat extends Component {
  state = {
      messages: [],
      currentMessage: '',
    }

    componentDidMount() {
      fetch(`https://run-be.herokuapp.com/api/v1/users/${this.props.route.params.userId}/messages`)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => this.setState({
          messages: data.data,
        }))

    }

    onSend(messages = []) {
      console.log(this.state.currentMessage)
      fetch(`https://run-be.herokuapp.com/api/v1/users/${this.props.route.params.userId}/messages`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            'topic': 'still test topic',
            'body': this.state.currentMessage,
            'username': this.props.route.params.username,
          }
        )
      }).then(response => console.log(response))
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }

    // handleInput = (e) => {
    //   this.setState({
    //     currentMessage: (e.nativeEvent.text)
    //   })
    // }

    render() {
      console.log('currentMessage', this.state.currentMessage)
      // console.log('route params userid', this.props.route.params.userId)
      // console.log('route params username', this.props.route.params.username)
      return (
        <View style={{flex: 1}}>
          <Header
          userId={this.props.route.params.userId}
          navigation={this.props.navigation}
          />
          <GiftedChat
            text={this.state.currentMessage}
            onInputTextChanged={inputText => {
              this.setState({currentMessage: inputText})
            }}
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      )
    }


  // state = {
  //   messages: 'test',
  //   currentMessage: '',
  //   messageTopic: '',
  // }
  //
  // sendMessage = () => {
  //   console.log('message')
  // }
  //
  //
  // render() {
  //   if(this.state.messages) {
  //     return(
  //       <View style={styles.container}>
  //         <View style={styles.messageArea}>
  //         <GiftedChat
  //           messages={this.state.messages}
  //           onSend={() =>  {Alert.alert('Tanisha Rocks')}}
  //           user={{
  //             _id: 1,
  //           }}
  //         />
  //         </View>
  //         <View style={styles.messageInput}>
  //           <TextInput
  //           type='text'
  //           name='messageTopic'
  //           placeholder='Enter a message topic'
  //           value={this.state.messageTopic}
  //           style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 300, marginBottom: 15, paddingLeft: 10}}
  //           onChange={(e) => {
  //             this.setState({messageTopic: e.nativeEvent.text})
  //           }}
  //           />
  //           <TextInput
  //           type='text'
  //           name='currentMessage'
  //           placeholder='Enter a message'
  //           value={this.state.currentMessage}
  //           style={{borderColor: 'grey', borderWidth: 1, height: 50, width: 300, marginBottom: 15, paddingLeft: 10}}
  //           onChange={(e) => {
  //             this.setState({currentMessage: e.nativeEvent.text})
  //           }}
  //           />
  //           <Button
  //           title='Send'
  //           color='darkorange'
  //           accesibilityLabel='send a message'
  //           onPress={() => this.sendMessage()}
  //            />
  //         </View>
  //       </View>
  //     )
  //   } else {
  //     return(
  //     <View style={styles.emptyContainer}>
  //       <Header navigation={this.props.navigation}/>
  //       <Text style={styles.messages}>You have no chats. Find a buddy and start a chat!</Text>
  //       <Image source={require('../assets/chat.jpg')} style={{height:380, width:380}}/>
  //     </View>
  //     )
  //   }
  // }
}
const offset = 24;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  message: {
    fontSize: 22,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
  messageInput: {
    alignSelf: 'center',
    display: 'flex',
    marginBottom: 20,
  },
  messageArea: {

  },
  // sentMessage: {
  //   height: offset * 2,
  //   margin: offset,
  //   paddingHorizontal: offset,
  //   borderColor: '#111111',
  //   borderWidth: 1,
  // },
  // receivedMessage: {
  //   backgroundColor: 'yellow',
  //   borderRadius: 10,
  //   padding: 5,
  //   width: 200,
  // }
})
