import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { colors } from '~/styles';

import styles from './styles';

import LogoOrc from './LogoOrc';
import Notif from './Notif';
import ProfilePic from './ProfilePic';

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
      // fontFamily: 'monospace',
      fontSize: 30,
    },
    title: 'Perfil',
    headerStyle: {
      backgroundColor: colors.greenOrcLight,
      textAlign: 'center',
    },
    headerLeft: () => <LogoOrc />,
    headerRight: () => <Notif />,
  };

  render() {
    return (
      <View>
        <Text style={styles.textTitle}>Minhas informações</Text>
        <View style={styles.profilePic}>
          <ProfilePic />
        </View>
        <View>
          <Text style={styles.textBlock}>
            <Text style={styles.textBody}>Nome: </Text>
            <Text style={styles.textBody2}>Fulaninha</Text>
            {'\n'}
            <Text style={styles.textBody}>Diretoria: </Text>
            <Text style={styles.textBody2}>Negócios</Text>
            {'\n'}
            <Text style={styles.textBody}>E-mail: </Text>
            <Text style={styles.textBody2}>fulaninha@orcestra.com.br</Text>
            {'\n'}
          </Text>
        </View>
        <Text style={styles.textCalendario}>Ver meu calendário</Text>
      </View>
    );
  }
}
