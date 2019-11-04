import { StyleSheet } from 'react-native';
import { fonts } from '~/styles';

const styles = StyleSheet.create({
  nome: {
    fontSize: fonts.small,
    color: '#000',
    fontFamily: 'Patrick Hand',
  },
  cargo: {
    fontSize: fonts.tiny,
    color: '#000',
    fontFamily: 'Patrick Hand',

  },
  membro: {
    alignItems: 'center',

  },
  imagem: {

    width: 50,
    borderRadius: '50%',


  },


});
export default styles;
