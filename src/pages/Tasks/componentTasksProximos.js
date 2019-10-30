import React, { Component } from 'react';

import {
  View, Text, StyleSheet,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { colors, fonts } from '~/styles';

export default class TasksProximos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.flexContainer}>
            <Text style={styles.titleTextStyle}>Próximos</Text>
          </View>
        </View>
        <View>
          <CheckBox
            title="Nome da tarefa aqui"
            checked={this.state.checked}
            size={30}
            textStyle={styles.textStyle}
          />
          <CheckBox
            title="Nome da tarefa aqui"
            checked={this.state.checked}
            size={30}
            textStyle={styles.textStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.greenOrcLight,
  },
  flexContainer: {
    flex: 1,
  },

  titleTextStyle: {
    fontSize: fonts.input,
    color: '#000',
    fontFamily: 'monospace',
    paddingLeft: 25,
  },

  textStyle: {
    fontSize: fonts.input,
    color: '#000',
    fontFamily: 'monospace',
  },
});
