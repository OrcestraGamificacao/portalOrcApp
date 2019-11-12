import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Formik } from 'formik';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { colors } from '~/styles';
import renderIf from './renderIf';

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

        {/* <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange, handleBlur, handleSubmit, values,
          }) => (
            <View>
              <TextInput
                style={{ backgroundColor: '#FFFFFF', borderColor: '#000000', borderWidth: 1 }}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik> */}
        <TouchableHighlight onPress={() => this.setState({ status: true })}>
          <Text>
            SELECTED DATE:{ startDate }
          </Text>
        </TouchableHighlight>

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
    marginTop: 100,
  },
  calendarTextStyle: {
    fontSize: 18,
    lineHeight: 20,
  },
});
