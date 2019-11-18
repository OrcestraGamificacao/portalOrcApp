import React, { Component } from 'react';
import {
  View, Image, StyleSheet,
} from 'react-native';
import styles from './styles';

export default class Activities extends Component {
  static navigationOptions = {
    headerBackTitleVisible: false,
    headerTintColor: '#FFF',
    headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri: 'https://i.imgur.com/oPgigXi.jpg',
        }}
      />
    ),
    title: 'Atividades',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerLeft: () => (
      <Image
        source={{
          uri: 'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
        }}
        style={styles.logo}
      />
    ),
  };

  render() {
    return <Text>...</Text>;
  }
}
