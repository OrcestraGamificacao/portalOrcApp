import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Formik } from 'formik';
import { colors } from '~/styles';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
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

        <CalendarPicker
          style={styles.teste}
          backgroundColor="blue"
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

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
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

  teste: {
    backgroundColor: 'red',

  },
});
