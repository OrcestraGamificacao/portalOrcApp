import { StyleSheet } from 'react-native';
import { fonts } from '~/styles';

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  role: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 15,
  },
  member: {
    alignItems: 'center',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
export default styles;
