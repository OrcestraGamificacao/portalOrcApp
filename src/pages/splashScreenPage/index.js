import React from 'react';

import { View, StatusBar } from 'react-native';
import styles from './styles';

import SplashScreen from '~/components/splashScreen';


const Splash = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <SplashScreen />
  </View>
);

Splash.navigationOptions = {
  header: null,
};

export default Splash;
