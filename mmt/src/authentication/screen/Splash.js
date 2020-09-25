import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { stackNavigation } from '../../navigation/Navigation'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      stackNavigation();
    }, 4000);
  }

  render() {
    return (
      <ImageBackground
        source={image}
        style={{ height: '100%', width: '100%' }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignments: 'center'
          }}>
        </View>
      </ImageBackground>
    );
  }
}

