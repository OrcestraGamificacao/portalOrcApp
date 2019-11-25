import React, { Component } from 'react';
import {
  Image, ScrollView, Text, StyleSheet, TouchableOpacity, Button,
} from 'react-native';
import { colors } from '~/styles';
import TopTab from '~/components/tasksNavBar';
import styles from './styles';

export default class Tasks extends Component {
  render() {
    return (

      <ScrollView>
        <TopTab />
        <Button
          title="vai"
          onPress={() => this.props.navigation.navigate('Calendario')
          /* this.props.navigation.setParams({
            headerRight: (
              <TouchableOpacity
                  style={styles.addButtonStyle}
                >
                  <Text style={styles.addButtonTextStyle}>-</Text>
                </TouchableOpacity>
            ),
          }) */}
        />
      </ScrollView>
    );
  }
}


Tasks.navigationOptions = {
  title: 'Tarefas',
  headerLeft: (
    <Image
      style={styles.logoOrcStyle}
      source={{
        uri:
          'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
      }}
    />
  ),
  headerRight: (
    <TouchableOpacity
      style={styles.addButtonStyle}
    >
      <Text style={styles.addButtonTextStyle}>+</Text>
    </TouchableOpacity>
  ),
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
    fontSize: 30,
  },
};
