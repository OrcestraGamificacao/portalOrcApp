import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

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
    paddingLeft: 25,
  },

  textStyle: {
    fontSize: fonts.input,
    color: '#000',
  },
});

export default styles;
