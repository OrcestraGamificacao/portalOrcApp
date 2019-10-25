import React, { Component } from 'react';

import { colors } from '~/styles';

import { View, Text, Image } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Perfil',
    headerLeft: () => <LogoOrc />,
    // headerLayoutPreset: 'center',
    // headerBackTitleVisible: false,
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: colors.greenOrcLight,
    //   },
    //   headerTintColor: '#FFFFFF',
    // },
  };

  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    );
  }
}

class LogoOrc extends Component {
  render() {
    return (
      <Image
        source={require('../../../assets/Orc_estra_capacete_colorido.png')}
        style={{ width: 45, height: 45, marginLeft: 6 }}
      />
    );
  }
}

class Notif extends Component {
  render() {
    return (
      <Image
        source={require('../../../assets/Orc_estra_capacete_colorido.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
