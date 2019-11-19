import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 36,
    height: 36,
    borderRadius: 36,
  },
  name: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#000',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  notify: {
    fontFamily: 'monospace',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#000',
  },
  notify_details: {
    fontFamily: 'monospace',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    color: '#474535',
    marginTop: 4,
  },
  container: {
    width: '95%',
  },
  activity: {
    flexDirection: 'row',
    padding: 7,
    marginTop: 11,
    alignItems: 'center',
  },
  container_notifies: {
    width: '90%',
    marginLeft: 9,
  },
});

export default styles;
