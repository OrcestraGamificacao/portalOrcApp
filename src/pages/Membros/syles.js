
import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64,
    marginLeft: 0,
  },
  headerTitle: {
    fontFamily: 'monospace',
    fontSize: 30,
  },
  header: {
    backgroundColor: colors.greenOrcLight,
    textAlign: 'center',
  },
});

export default styles;
