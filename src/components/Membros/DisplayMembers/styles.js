import { StyleSheet } from 'react-native';
import { fonts, colors } from '~/styles';

const styles = StyleSheet.create({
  name: {
    fontSize: fonts.regular,
    color: '#000',
    fontFamily: 'monospace',
    marginLeft: 13,
    marginTop: 3,
  },

  presidencia: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    backgroundColor: colors.greenOrcLight,
  },
  diretores: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    backgroundColor: colors.greenOrcLight,
  },
  acessores: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
  },
  members: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});
export default styles;
