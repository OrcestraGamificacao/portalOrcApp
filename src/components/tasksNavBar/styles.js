import { StyleSheet } from 'react-native';
import { fonts } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },

  buttonTextStyle: {
    fontSize: fonts.input,
    color: '#000',
    fontFamily: 'monospace',
  },
});

export default styles;
