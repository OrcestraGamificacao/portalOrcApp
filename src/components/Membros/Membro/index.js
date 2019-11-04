import React from 'react';
import {
  View, Text, Image,

} from 'react-native';
import styles from './styles';


const Membro = () => (

  <View style={styles.membro}>
    <Image
      style={styles.Membro}
      source={require('~/assets/images/orc_wow.png')}
    />
    <Text style={styles.nome}>Fulano</Text>
    <Text style={styles.cargo}>Institucional</Text>

  </View>

);

export default Membro;
