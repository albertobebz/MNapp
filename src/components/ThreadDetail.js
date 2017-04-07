import React from 'react';
import { View, Text } from 'react-native';

const ThreadDetail = (props) => {
  const { containerStyle, textStyle, whatchedStyle, nameStyle, topicStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={whatchedStyle}>{props.thread.watched}</Text>
      <View>
        <Text style={[textStyle, topicStyle]}>{props.thread.topic_url}</Text>
        <Text style={[textStyle, nameStyle]}>{props.thread.name}</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'purple',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textStyle: {
    color: '#FFFFFF'
  },
  topicStyle: {
    fontWeight: 'bold',
  },
  nameStyle: {
    fontSize: 20
  },
  whatchedStyle: {
    color: 'purple',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginRight: 20
  }
};

export default ThreadDetail;
