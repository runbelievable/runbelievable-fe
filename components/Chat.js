import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';
import SearchButton from './SearchButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { GiftedChat } from 'react-native-gifted-chat';
import { getMessageConversation, postMessageToConversation } from '../apiCalls';

export default class Chat extends Component {
  state = {
      messages: [],
      currentMessage: '',
    }

  componentDidMount() {
    getMessageConversation(this.props.route.params.userId, this.props.route.params.username)
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
      .then(data => this.setState({messages: data.reverse()}))
    }

    onSend(messages = []) {
      postMessageToConversation(this.props.route.params.userId, this.state.currentMessage, this.props.route.params.username)
      .then(response => console.log(response.json()))

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }))
    }

    render() {
      return (
        <View style={{flex: 1}}>
          <View style={styles.header}>
          <Header
          userId={this.props.route.params.userId}
          navigation={this.props.navigation}
          />
          </View>
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
  header: {
    alignItems: 'center'
  },
})
