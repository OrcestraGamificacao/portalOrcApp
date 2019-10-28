import React, { Component } from 'react';

import { colors } from '~/styles';

// import { Font } from 'expo-font';

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
    title: 'Perfil',
    headerStyle: {
      backgroundColor: colors.greenOrcLight,
      textAlign: 'center',
    },
    headerTitleStyle: {
      fontFamily: 'monospace',
      fontSize: 30,
    },
    headerLeft: () => <LogoOrc />,
  };

  // componentDidMount() {
  //   Font.loadAsync({
  //     'PatrickHand-Regular': require('../../../assets/fonts/PatrickHand-Regular.ttf'),
  //   });
  // }

  render() {
    return (
      <View>
        <Text> Em construção... </Text>
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
        style={{ width: 64, height: 64, marginLeft: 0 }}
      />
    );
  }
}

class Notif extends Component {
  render() {
    return (
      <Image
        //source={require('../../../assets/Orc_estra_capacete_colorido.png')}

        style={{ width: 30, height: 30 }}
      />
    );
  }
}
