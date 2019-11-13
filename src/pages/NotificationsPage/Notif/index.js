import React, { Component } from 'react';
import { Image } from 'react-native';

class Notif extends Component {
    render() {
      return (
        <Image
          source={{
            uri:
              'https://i.imgur.com/5rNTgmS.png',
          }}
          style={{ width: 21.25, height: 29, marginRight: 20.88, marginTop: 9, marginBottom: 11 }}
        />
      );
    }
  }

export default Notif;