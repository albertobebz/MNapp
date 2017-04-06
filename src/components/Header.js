import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  // destructuring
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#FFFFFF'
  }
};

export default Header;
