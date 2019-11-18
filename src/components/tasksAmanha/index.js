import React, { Component } from 'react';

import {
  View, Text,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

export default class TasksAmanha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  onPress = () => {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.flexContainer}>
            <Text style={styles.titleTextStyle}>Amanhã</Text>
          </View>
        </View>
        <View>
          <CheckBox
            title="Nome da tarefa aqui"
            checked={this.state.checked}
            onPress={this.onPress}
            size={30}
            textStyle={styles.textStyle}
          />
          <CheckBox
            title="Nome da tarefa aqui"
            checked={this.state.checked}
            onPress={this.onPress}
            size={30}
            textStyle={styles.textStyle}
          />
        </View>
      </View>
    );
  }
}
