import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const containerWidth = screenWidth * 0.92;

const styles = StyleSheet.create({
  Presidência: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    backgroundColor: '#A3C886',
    width: '92%',
    marginHorizontal: 'auto',
  },
  Diretores: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    backgroundColor: '#A3C886',
    width: '92%',
    marginHorizontal: 'auto',
  },
  Assessores: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 18,
    width: '92%',
    marginHorizontal: 'auto',
  },
  members: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  rank: {
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 13,
    marginTop: 5,
  },
  col4: {
    margin: 'auto',
    width: containerWidth / 4 - 0.1,
  },
  col3: {
    margin: 'auto',
    width: containerWidth / 3 - 0.1,
  },
});
export default styles;
