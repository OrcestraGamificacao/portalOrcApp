import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Membro from '../Membro';

const DisplayMembers = () => (
  <View>
    <View style={styles.presidencia}>
      <Text style={styles.name}>Presidência</Text>
      <View style={styles.members}></View>
    </View>
    <View style={styles.diretores}>
      <Text style={styles.name}>Diretores</Text>
      <View style={styles.members}></View>
    </View>
    <View style={styles.acessores}>
      <Text style={styles.name}>Acessores</Text>
      <View style={styles.members}></View>
    </View>
  </View>
);

export default DisplayMembers;
