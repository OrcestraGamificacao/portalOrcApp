import { StyleSheet } from 'react-native';
import { fonts } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 42,
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonTextStyle: {
    fontSize: fonts.input,
    color: '#000',
  },
});

export default styles;
