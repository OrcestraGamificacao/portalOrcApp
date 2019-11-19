/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Member from '../Member';

const members = [
  {
    name: 'Saleh Nazih',
    rank: 'Presidência',
    department: 'Organizacional',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Calebe Rios',
    rank: 'Presidência',
    department: 'Institucional',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Luciana Ribeiro',
    rank: 'Diretores',
    department: 'Projetos',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Leonardo Takehana',
    rank: 'Diretores',
    department: 'Negócios',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Bruno Dantas',
    rank: 'Diretores',
    department: 'Marketing',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Alan Marques',
    rank: 'Diretores',
    department: 'Operações',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Brian Pina',
    rank: 'Assessores',
    department: 'Projetos',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Eric Akio',
    rank: 'Assessores',
    department: 'Marketing',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Fellipe Araújo',
    rank: 'Assessores',
    department: 'Negócios',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Daniela Soares',
    rank: 'Assessores',
    department: 'Operações',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
  {
    name: 'Samuel Ávila',
    rank: 'Assessores',
    department: 'Marketing',
    avatar: require('~/assets/images/orc_capacete.png'),
  },
];

const DisplayMembers = ({ rank }) => {
  const filteredMembers = members.filter((member) => member.rank === rank);
  let rankStyle = null;
  let colNum = null;
  if (rank === 'Assessores') {
    rankStyle = styles.Assessores;
    colNum = styles.col3;
  } else if (rank === 'Diretores') {
    rankStyle = styles.Diretores;
    colNum = styles.col4;
  } else if (rank === 'Presidência') {
    rankStyle = styles.Diretores;
    colNum = styles.col4;
  }
  return (
    <View style={rankStyle}>
      <Text style={styles.rank}>{rank}</Text>
      <View style={styles.members}>
        { filteredMembers.map((member, index) => (<View key={index.toString()} style={colNum}><Member avatar={member.avatar} name={member.name} role={member.department} /></View>)) }
      </View>
    </View>
  );
};

export default DisplayMembers;
