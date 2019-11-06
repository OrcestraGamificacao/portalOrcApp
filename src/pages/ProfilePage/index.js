import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

import api from '../../services/api';

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
    title: 'Perfil',
    headerStyle: {
      backgroundColor: colors.greenOrcLight,
      textAlign: 'center',
    },
    headerLeft: () => <LogoOrc />,
    headerRight: () => <Notif />,
  };

  state = {
    info: {},
  };

  componentDidMount() {
    this.loadInfo();
  }

  loadInfo = async () => {
    const response = await api.get('/users/alan-ms');

    const info = response.data;

    this.setState({ info });
    console.log(this.state.info);
  };

  render() {
    return (
      <View>
        <Text style={styles.textTitle}>Minhas informações</Text>
        <View style={styles.profilePic}>
          <Image
            source={{
              uri: this.state.info.avatar_url,
            }}
            style={styles.imageLimit}
          />
        </View>
        <View>
          <Text style={styles.textBlock}>
            <Text style={styles.textBody}>Nome: </Text>
            <Text style={styles.textBody2}>{this.state.info.name}</Text>
            {'\n'}
            <Text style={styles.textBody}>Diretoria: </Text>
            <Text style={styles.textBody2}>{this.state.info.type}</Text>
            {'\n'}
            <Text style={styles.textBody}>E-mail: </Text>
            <Text style={styles.textBody2}>{this.state.info.html_url}</Text>
            {'\n'}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.textCalendario}>Ver meu calendário</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
