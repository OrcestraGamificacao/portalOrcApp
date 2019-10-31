import { StyleSheet } from 'react-native';
import { colors } from '~/styles';
import React from 'react';
import {Text,View,} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textBody: {
    fontSize: 30,
    width: 500,
    height: 34,
    marginLeft:18,
    marginTop: 21,
  },
  textBody2: {
    fontSize: 20,
    width: 500,
    height: 23,
    marginLeft:75,
    marginTop: 200,
  },
  textBody3: {
    fontSize: 20,
    width: 500,
    height: 23,
    marginLeft:75,
  },
  textCalendario: {
    fontSize: 20,
    width: 900,
    height: 23,
    marginLeft: 198,
    marginTop: 61,
    color: "#7AAF50",
  },
});


export default styles;
