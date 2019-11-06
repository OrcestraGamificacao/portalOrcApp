import { StyleSheet } from 'react-native';
import { fonts } from '~/styles';

const styles = StyleSheet.create({
  name: {
    fontSize: fonts.small,
    color: '#000',
    fontFamily: 'Patrick Hand',
  },
  role: {
    fontSize: fonts.tiny,
    color: '#000',
    fontFamily: 'Patrick Hand',
  },
  member: {
    alignItems: 'center',
    width: 76,
    height: 76,
  },
  photo: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});
export default styles;
