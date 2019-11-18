import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from '../styles';

class LogoOrc extends Component {
  render() {
    return (
      <Image
        source={{
          uri:
            'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
        }}
        style={styles.logo}
      />
    );
  }
}

export default LogoOrc;
