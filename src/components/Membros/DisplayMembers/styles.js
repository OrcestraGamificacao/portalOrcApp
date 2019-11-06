import { StyleSheet } from 'react-native';
import { fonts, colors } from '~/styles';

const styles = StyleSheet.create({
  name: {
    fontSize: fonts.regular,
    color: '#000',
    fontFamily: 'Patrick Hand',
    marginLeft: 13,
    marginTop: 3,
  },

  presidencia: {
    display: 'flex',
    height: 153,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    backgroundColor: colors.greenOrcLight,
  },
  diretores: {
    display: 'flex',
    height: 153,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    backgroundColor: colors.greenOrcLight,
  },
  acessores: {
    display: 'flex',
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
  },
});
export default styles;
