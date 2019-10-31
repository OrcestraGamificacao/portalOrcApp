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
      fontFamily: 'monospace',
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
        <Text style={styles.textBody}>Minhas informações</Text>
        <ProfilePic />
        <Text style={styles.textBody2}>Nome: Fulaninha</Text>
        <Text style={styles.textBody3}>Diretoria: Negócios</Text>
        <Text style={styles.textBody3}>E-mail: fulaninha@orcestra.com.br</Text>
        <Text style={styles.textCalendario}>Ver meu calendário</Text>
      </View>
    );
  }
}
