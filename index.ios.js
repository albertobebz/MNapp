// Index.ios.js code for iOS app in here

// import a library to help create a component
import React from 'react';
// destructuring the variable pulling them out from react-native library
import { AppRegistry, View } from 'react-native';
// importing other components
import Header from './src/components/Header';
import TopicList from './src/components/TopicList';

// create a component
const App = () => {
  return (
    <View>
      <Header headerText={'Mumsnet App'} />
      <TopicList />
    </View>
  );
};

// render it to the device
AppRegistry.registerComponent('mnapp', () => App);
