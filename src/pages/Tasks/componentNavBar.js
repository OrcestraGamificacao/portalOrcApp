import React, { Component } from 'react';
import {
  Image, View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { colors } from '~/styles';

const logoOrc = () => (
  <Image
    style={styles.logoOrcStyle}
    source={{
      uri:
        'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
    }}
  />
);

const addButton = () => (
  <TouchableOpacity
    style={styles.addButtonStyle}
  >
    <Text style={styles.addButtonTextStyle}>+</Text>
  </TouchableOpacity>
);

export default class Tasks extends Component {
  static navigationOptions = {
    title: 'Tarefas',
    headerLeft: logoOrc,
    headerRight: addButton,
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
    headerStyle: {
      backgroundColor: colors.greenOrcLight,
      textAlign: 'center',
    },
    headerTitleStyle: {
      fontFamily: 'monospace',
      fontSize: 30,
    },
  };

  render() {
    return (
      <View />
    );
  }
}


const styles = StyleSheet.create({
  logoOrcStyle: {
    width: 64,
    height: 64,
  },

  addButtonStyle: {
    height: 42,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
  },

  addButtonTextStyle: {
    fontSize: 54,
    color: '#FFF',
  },
});
