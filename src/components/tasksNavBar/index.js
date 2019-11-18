import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const TasksNavBar = () => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text style={styles.buttonTextStyle}>Minhas</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text style={styles.buttonTextStyle}>Delegadas</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text style={styles.buttonTextStyle}>Concluidas</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default TasksNavBar;
