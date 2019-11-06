import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Membro from '../Membro';

const DisplayMembers = () => (
  <View>
    <View style={styles.presidencia}>
      <Text style={styles.name}>Presidência</Text>
      <Membro />
    </View>
    <View style={styles.diretores}>
      <Text style={styles.name}>Diretores</Text>
      <Membro />
    </View>
    <View style={styles.acessores}>
      <Text style={styles.name}>Acessores</Text>
      <Membro />
    </View>
  </View>
);

export default DisplayMembers;
