import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: '#E00E00',
    height:          60,
    paddingTop:      15,
    shadowColor:     'black',
    shadowOffset:    { width: 0, height: 2 },
    shadowOpacity:   0.2,
    elevation:       2,
    position:        'relative' 
  },
  textStyle: {
    fontSize: 30
  }
}

export default Header;
