import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

import { colors } from '~/styles';

import styles from './styles';

import LogoOrc from './LogoOrc';
import Notif from './Notif';

export default class Profile extends Component {
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
    headerTitleStyle: {
      fontSize: 30,
      ...Platform.select({
        ios: {
          fontFamily: 'Courier',
        },
        android: {
          fontFamily: 'monospace',
        },
      }),
    },
    title: 'Notificações',
    headerStyle: {
      backgroundColor: colors.greenOrcLight,
      textAlign: 'center',
    },
    headerLeft: () => <LogoOrc />,
    headerRight: () => <Notif />,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>...</Text>
      </View>
    );
  }
}
