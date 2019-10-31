import React, { Component } from 'react';

import { colors } from '~/styles';

// import { Font } from 'expo-font';

import styles from './styles';

import { View, Text, Image, StyleSheet } from 'react-native';

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
    headerTitleStyle:{
      fontFamily: 'monospace',
      fontSize: 30,
    },
    title: 'Perfil',
    headerStyle: {
      backgroundColor: colors.greenOrcLight,
      textAlign: 'center',
    },
    headerLeft: () => <LogoOrc/>,
    headerRight: () => <Notif/>
  };

  // componentDidMount() {
  //   Font.loadAsync({
  //     'PatrickHand-Regular': require('../../../assets/fonts/PatrickHand-Regular.ttf'),
  //   });
  // }

  render() {
    return (
      <View>
        <Text style={styles.textBody}>Minhas informações</Text>
        <Picture/>
        <Text style={styles.textBody2}>Nome: Fulaninha</Text>
        <Text style={styles.textBody3}>Diretoria: Negócios</Text>
        <Text style={styles.textBody3}>E-mail: fulaninha@orcestra.com.br</Text>
      </View>
    );
  }
}
class LogoOrc extends Component {
  render() {
    return (
      <Image
        // source={require('../../../assets/Orc_estra_capacete_colorido.png')}
        source={{
          uri:
            'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
        }}
        style={{ width: 64, height: 64, marginTop:-10, marginLeft:-6 }}
      />
    );
  }
}

class Notif extends Component {
  render() {
    return (
      <Image
        source={{
          uri:
            'https://i.imgur.com/5rNTgmS.png',
        }}
        style={{ width: 21.25, height: 29, marginRight: 20.88, marginTop: 9, marginBottom: 11 }}
      />
    );
  }
}

class Picture extends Component {
  render() {
    return (
      <Image
        source={{
          uri: 
            'https://i.imgur.com/K4HLOCG.png',
        }}
        style={{position:'absolute', width: 159, height: 159, marginLeft: 125, marginTop: 69 }}
      />
    );
  }
}