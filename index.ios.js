import React           from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList.js'


// Outputs list of component names and src to be used in HTML head
// Builtin components (like amp-img) don't add to the list, but extensions (like amp-analytics) will
// Ex: [ { customElement: 'amp-analytics', src: 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js' } ]
// console.log(ampScripts);

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// export default Example;
AppRegistry.registerComponent('albums', () => App);
