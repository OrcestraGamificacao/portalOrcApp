import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '~/styles';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logoOrcStyle: {
    width: 64,
    height: 64,
  },

  addButtonStyle: {
    height: 42,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
  },

  addButtonTextStyle: {
    fontSize: 54,
    color: '#FFF',
  },

  textInputStyle: {
    height: 150,
    width: windowWidth * 0.9,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: fonts.input,
  },

  buttonColor: {
    backgroundColor: colors.greenOrcLight,
  },
});

export default styles;
