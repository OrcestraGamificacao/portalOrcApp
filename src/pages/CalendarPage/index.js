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
    title: 'Calendário',
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
        <Image
          source={{
            uri: 'https://i.imgur.com/rSWp8q2.jpg',
          }}
          style={styles.calendarPic}
        />
        <View>
          <Text style={styles.textBlock}>
            <Text style={styles.textBody}>Atividades do dia </Text>
            {'\n'}
            <Text style={styles.textBody2}> </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.textBlock2}>
            <Text style={styles.textBody}>Atividades da semana</Text>
            {'\n'}
            <Text style={styles.textBody2}> </Text>
          </Text>
        </View>
      </View>
    );
  }
}
