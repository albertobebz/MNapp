import React from 'react';
// destructuring the variable pulling them out from react-native library
import { View } from 'react-native';
// importing other components
import Header from './components/Header';
import TopicList from './components/TopicList';

// create a component
const App = () => {
  const { flexStyle } = styles;

  return (
    <View style={flexStyle}>
      <Header headerText={'Mumsnet App'} />
      <TopicList />
    </View>
  );
};

const styles = {
  flexStyle: {
    flex: 1
  }
};

export default App;
