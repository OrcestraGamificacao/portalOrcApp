import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { colors, fonts } from '~/styles';

const windowWidth = Dimensions.get('window').width;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      status: false,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Escreva sua Tarefa aqui"
            textAlignVertical="top"
          />
        </View>
        <TouchableHighlight
          onPress={() => this.setState({ status: true })}
          style={styles.textInputStyle}
        >
          <Text style={styles.calendarButtonTextStyle}>
            Data limite:{ startDate }
          </Text>
        </TouchableHighlight>

        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Adicione um responsável"
            textAlignVertical="top"
          />
        </View>

        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Coloque mais alguma info"
            textAlignVertical="top"
          />
        </View>

        <Dialog
          visible={this.state.status}
          onTouchOutside={() => {
            this.setState({ status: false });
          }}
        >
          <DialogContent>
            <CalendarPicker
              selectedDayColor={colors.greenOrcDark}
              selectedDayTextColor="white"
              todayBackgroundColor={colors.greenOrcLight}
              weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
              months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
              previousTitle=" <"
              nextTitle="> "
              textStyle={styles.calendarTextStyle}
              onDateChange={this.onDateChange}
            />
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  calendarTextStyle: {
    fontSize: 18,
    lineHeight: 20,
  },
  textInputStyle: {
    width: windowWidth * 0.9,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: fonts.input,
    margin: 10,
  },
  calendarButtonTextStyle: {
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
});
