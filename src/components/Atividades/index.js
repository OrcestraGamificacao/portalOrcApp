/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const mocks = [
  {
    name: 'Brian Pina',
    notify: ' criou uma nova área de trabalho',
    image: require('../../assets/images/orc_capacete.png'),
    date: new Date('Nov 19 2019'),
    where: 'Diretoria de projetos',
  },
  {
    name: 'Daniela Soares',
    notify: ' criou uma nova área de trabalho',
    image: require('../../assets/images/orc_capacete.png'),
    date: new Date('Nov 16 2019'),
    where: 'Diretoria de operações',
  },
  {
    name: 'Eric',
    notify: ' criou uma nova área de trabalho',
    image: require('../../assets/images/orc_capacete.png'),
    date: new Date('Nov 16 2019'),
    where: 'Diretoria de marketing',
  },
  {
    name: 'Fellipe Araujo',
    notify: ' criou uma nova área de trabalho',
    image: require('../../assets/images/orc_capacete.png'),
    date: new Date('Oct 20 2019'),
    where: 'Diretoria de negócios',
  },
];

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const now = new Date();
const hoje = mocks.filter(act => {
  const days = Math.round((Date.parse(now) - Date.parse(act.date)) / (24 * 60 * 60 * 1000));
  return days <= 1;
});
const semana = mocks.filter(act => {
  const days = Math.round((Date.parse(now) - Date.parse(act.date)) / (24 * 60 * 60 * 1000));
  return days > 1 && days <= 7;
});
const mes = mocks.filter(act => {
  const days = Math.round((Date.parse(now) - Date.parse(act.date)) / (24 * 60 * 60 * 1000));
  return days > 7 && days <= 31;
});

const Activity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Hoje</Text>
      {hoje.map((member, index) => (
        <View key={index} style={styles.activity}>
          <View>
            <Image source={member.image} style={styles.image} />
          </View>
          <View style={styles.container_notifies}>
            <Text style={styles.notify}>
              {member.name}
              {member.notify}
            </Text>
            <Text style={styles.notify_details}>
              Ação por {member.name}. {`${member.date.getDate()} de ${months[member.date.getMonth()]} de ${member.date.getFullYear()}`} em {member.where}
            </Text>
          </View>
        </View>
      ))}
      <View style={styles.line} />
      <Text style={styles.date}>Essa semana</Text>
      {semana.map((member, index) => (
        <View key={index} style={styles.activity}>
          <View>
            <Image source={member.image} style={styles.image} />
          </View>
          <View style={styles.container_notifies}>
            <Text style={styles.notify}>
              {member.name}
              {member.notify}
            </Text>
            <Text style={styles.notify_details}>
              Ação por {member.name}. {`${member.date.getDate()} de ${months[member.date.getMonth()]} de ${member.date.getFullYear()}`} em {member.where}
            </Text>
          </View>
        </View>
      ))}
      <View style={styles.line} />
      <Text style={styles.date}>Esse mês</Text>
      {mes.map((member, index) => (
        <View key={index} style={styles.activity}>
          <View>
            <Image source={member.image} style={styles.image} />
          </View>
          <View style={styles.container_notifies}>
            <Text style={styles.notify}>
              {member.name}
              {member.notify}
            </Text>
            <Text style={styles.notify_details}>
              Ação por {member.name}. {`${member.date.getDate()} de ${months[member.date.getMonth()]} de ${member.date.getFullYear()}`} em {member.where}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Activity;
