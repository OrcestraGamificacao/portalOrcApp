import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Membro = props => (
  <View style={styles.member}>
    <Image
      style={styles.photo}
      source={require('../../../../assets/Orc_estra_capacete_colorido.png')}
    />
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.role}>{props.role}</Text>
  </View>
);

export default Membro;
