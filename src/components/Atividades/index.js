/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const mocks = [
  {
    name: 'Brian Pina',
    notify: ' criou uma nova área de trabalho',
    image: require('../../../assets/Orc_estra_capacete_colorido.png'),
  },
  {
    name: 'Daniela Soares',
    notify: ' criou uma nova área de trabalho',
    image: require('../../../assets/Orc_estra_capacete_colorido.png'),
  },
  {
    name: 'Eric',
    notify: ' criou uma nova área de trabalho',
    image: require('../../../assets/Orc_estra_capacete_colorido.png'),
  },
  {
    name: 'Fellipe Araujo',
    notify: ' criou uma nova área de trabalho',
    image: require('../../../assets/Orc_estra_capacete_colorido.png'),
  },
];

const Activity = () => {
  return (
    <View style={styles.container}>
      {mocks.map(member => (
        <View style={styles.activity}>
          <View>
            <Image source={member.image} style={styles.image} />
          </View>
          <View style={styles.container_notifies}>
            <Text style={styles.notify}>
              {member.name}
              {member.notify}
            </Text>
            <Text style={styles.notify_details}>
              Ação por {member.name}. 11 de nov de 2019 em Diretoria de Negócios
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Activity;
