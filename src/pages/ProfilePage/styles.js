import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 21,
    ...Platform.select({
      ios: {
        fontFamily: 'AppleSDGothicNeo-Regular',
      },
      android: {
        fontFamily: 'serif',
      },
    }),
  },
  textBody: {
    fontSize: 20,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontFamily: 'AppleSDGothicNeo-Regular',
      },
      android: {
        fontFamily: 'serif',
      },
    }),
  },
  textBody2: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: 'AppleSDGothicNeo-Regular',
      },
      android: {
        fontFamily: 'serif',
      },
    }),
  },
  profilePic: {
    alignItems: 'center',
  },
  textCalendario: {
    fontSize: 20,
    textAlign: 'right',
    marginTop: 50,
    marginRight: 8,
    color: '#7AAF50',
    ...Platform.select({
      ios: {
        fontFamily: 'AppleSDGothicNeo-Regular',
      },
      android: {
        fontFamily: 'serif',
      },
    }),
  },
  textBlock: {
    marginLeft: 50,
    textAlign: 'left',
    marginTop: 210,
    lineHeight: 30,
  },
});

export default styles;
