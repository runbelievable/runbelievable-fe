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
      fetch(`https://run-be.herokuapp.com/api/v1/users/${this.props.route.params.userId}/message-conversations/${this.props.route.params.username}`)
        .then(response => response.json())
        .then(data => data.data.map(message => {
          return message = {
            key: message.id,
            _id: message.id,
            text: message.attributes.body,
            createdAt: message.attributes.created_at,
            user: {
              _id: message.attributes.sent_messageable_id
            }
          }
        }))
        .then(data => this.setState({messages: data}))

    }

    onSend(messages = []) {
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
      })
      .then(response => console.log(response))
      console.log(messages)
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }))
    }

    render() {
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
})
