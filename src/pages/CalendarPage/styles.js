import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  textHeader: {
    fontSize: 30,
    ...Platform.select({
      ios: {
        fontFamily: 'Courier',
      },
      android: {
        fontFamily: 'monospace',
      },
    }),
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

  calendarPic: {
    width: '94%',
    height: '34%',
    marginTop: 37,
    alignItems: 'center',
    marginLeft: 10,
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
    marginLeft: 12,
    textAlign: 'left',
    marginTop: 16,
    lineHeight: 30,
  },
  textBlock2: {
    marginTop: 100,
    marginLeft: 12,
    textAlign: 'left',
    lineHeight: 30,
  },
});

export default styles;
