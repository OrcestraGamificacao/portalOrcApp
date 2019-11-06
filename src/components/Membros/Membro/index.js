import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Membro = () => (
  <View style={styles.member}>
    <Image
      style={styles.photo}
      source={require('../../../../assets/Orc_estra_capacete_colorido.png')}
    />
    <Text style={styles.name}>Fulano</Text>
    <Text style={styles.role}>Cargo</Text>
  </View>
);

export default Membro;
