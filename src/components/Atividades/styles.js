import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 36,
    height: 36,
    borderRadius: 36,
  },
  name: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#000',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  notify: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000',
  },
  notify_details: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    color: '#474535',
    marginTop: 4,
  },
  activity: {
    flexDirection: 'row',
    padding: 7,
    marginTop: 11,
    alignItems: 'center',
    width: '92%',
    marginHorizontal: 'auto',
  },
  container_notifies: {
    width: '90%',
    marginLeft: 9,
  },
  date: {
    fontSize: 20,
    marginLeft: 7,
    marginTop: 5,
    fontFamily: 'Roboto',
    alignSelf: 'flex-start',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'rgba(0, 0, 0, .15)',
    height: 1,
    width: '100%',
    marginTop: 21,
    marginBottom: 10,
  },
});

export default styles;
