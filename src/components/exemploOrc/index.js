import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const exemploOrc = () => (
  <Image
    style={styles.imageOrc}
    source={require('~/assets/images/orc_wow.png')}
  />
);

export default exemploOrc;
