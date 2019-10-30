import React, { Component } from 'react';

import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import styles from './styles.js';

export default class MEMBROS extends Component {
  static navigationOptions = {
    headerBackTitleVisible: false,
    headerTintColor: '#ffffff',
    headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri: 'https://i.imgur.com/oPgigXi.jpg',
        }}
      />
    ),
    title: 'MEMBROS',
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
    return (
      <View>
        <Text>...</Text>
      </View>
    );
  }
}
