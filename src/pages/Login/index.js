import React from 'react';

import { View, StatusBar } from 'react-native';
import styles from './style';

import LoginScreen from '../../components/Login';


const Main = () => (
  <View style={styles.container}>
    <LoginScreen />
  </View>
);

Main.navigationOptions = {
  header: null,
};

export default Main;
