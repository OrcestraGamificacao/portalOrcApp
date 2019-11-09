/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Membro = ({ name, role, avatar }) => (
  <View style={styles.member}>
    <Image
      style={styles.photo}
      source={avatar}
    />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.role}>{role}</Text>
  </View>
);

export default Membro;
