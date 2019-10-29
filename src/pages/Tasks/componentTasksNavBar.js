import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { fonts } from '~/styles';

export default class TasksNavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonTextStyle}>Minhas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonTextStyle}>Delegadas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonTextStyle}>Concluidas</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#D25',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },

  buttonTextStyle: {
    fontSize: fonts.input,
    color: '#000',
    fontFamily: 'monospace',
  },
});
