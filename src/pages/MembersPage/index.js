import React, { Component } from 'react';
<<<<<<< HEAD:src/pages/Activities/index.js
// import Member from '../../components/Member';
import { Image, StyleSheet } from 'react-native';
import Activity from '../../components/Atividades';
=======

import {
  ScrollView, Text, Image, StyleSheet,
} from 'react-native';
import DisplayMembers from '../../components/Members/DisplayMembers';
>>>>>>> dev:src/pages/MembersPage/index.js
import styles from './styles';

export default class Members extends Component {
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
    title: 'Membros',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerLeft: () => (
      <Image
        source={{
          uri:
            'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
        }}
        style={styles.logo}
      />
    ),
  };

  render() {
<<<<<<< HEAD:src/pages/Activities/index.js
    return <Activity />;
=======
    return (
      <ScrollView>
        <DisplayMembers rank="Presidência" />
        <DisplayMembers rank="Diretores" />
        <DisplayMembers rank="Assessores" />
      </ScrollView>
    );
>>>>>>> dev:src/pages/MembersPage/index.js
  }
}
