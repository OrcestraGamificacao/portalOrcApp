import React from 'react';

import { View, StatusBar } from 'react-native';
import styles from './styles';
import ExemploOrc from '~/components/exemploOrc';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ExemploOrc />
  </View>
);

Main.navigationOptions = {
  title: 'Orc',
};

export default Main;
