/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Member from '../Member';

const DisplayMembers = ({ rank }) => {
  //const filteredMembers = members.filter((member) => member.rank === rank);
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
        {/* filteredMembers.map((member, index) => (<View key={index.toString()} style={colNum}><Member avatar={member.avatar} name={member.name} role={member.department} /></View>)) */}
        <Text>Para o display dos membros, basta que remova o comentário, e crie um array de nome "members" com os membros que você deseja</Text>
      </View>
    </View>
  );
};

export default DisplayMembers;
