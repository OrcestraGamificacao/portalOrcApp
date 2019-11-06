import React from 'react';
// import react in our code.

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
  Alert,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
// import all the components we are going to use


export default class App extends React.Component {
  state = {
    height: new Animated.Value(0), // Initial value for opacity: 0
    width: new Animated.Value(0), // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 365, // Animate to opacity: 1 (opaque)
        duration: 500, // Make it take a while
      },
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 550, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
      },
    ).start(); // Starts the animation

    setTimeout(() => { Alert.alert('Mostra depois de 5 segundos.'); }, 2000);
  }

  render() {
    const { height } = this.state;
    const { width } = this.state;

    return (
      <View style={styles.orcHelmet}>

        <ImageBackground source={require('~/assets/images/BG.png')} style={{ width: '100%', height: '100%' }}>
          <ImageBackground source={require('~/assets/images/PATTERN.png')} style={{ width: '100%', height: '100%' }}>
            <Animated.Image
              source={require('~/assets/images/orc_capacete.png')}
              style={{
                width,
                height,
                position: 'relative',
              }}
            />
          </ImageBackground>
        </ImageBackground>

      </View>
    );
  }
}
const styles = StyleSheet.create({

  orcHelmet: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
