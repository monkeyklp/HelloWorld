import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Hello, Chat App!
        </Text>
        <Button
          onPress={() => navigate('Chat', {user : 'Lucy'})}
          title="Chat with Lucy"
        ></Button>
      </View>
       
      );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
