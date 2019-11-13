import React, { Component } from 'react';
import { Image } from 'react-native';

class ProfilePic extends Component {
  render() {
    return (
      <Image
        source={{
          uri: 'https://i.imgur.com/K4HLOCG.png',
        }}
        style={{
          position: 'absolute',
          width: 159,
          height: 159,
          marginTop: 20,
        }}
      />
    );
  }
}
export default ProfilePic;
