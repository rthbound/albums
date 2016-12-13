import React from 'react';
import { View } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

export default Album;
