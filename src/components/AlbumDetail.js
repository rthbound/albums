import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text
        key={props.album.title}>
        {props.album.title}
      </Text>
    </Card>
  )
}

export default AlbumDetail;
