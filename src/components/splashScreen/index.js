import React from 'react';
import { Image, ImageBackground } from 'react-native';
import styles from './styles';

const splashScreen = () => (
  <ImageBackground source={require('~/assets/images/BG.png')} style={{ width: '100%', height: '100%' }}>
    <ImageBackground source={require('~/assets/images/PATTERN.png')} style={{ width: '100%', height: '100%' }}>
        <Image
      style={styles.orcHelmet}
      source={require('~/assets/images/orc_capacete.png')}
    />
      </ImageBackground>
  </ImageBackground>
);

export default splashScreen;
