import React from 'react';
// import react in our code.

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
// import all the components we are going to use


export default class App extends React.Component {
  state = {
    height: new Animated.Value(30), // Initial value for opacity: 0
    width: new Animated.Value(10), // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 100, // Make it take a while
      },
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 1800, // Make it take a while
      },
    ).start(); // Starts the animation
  }

  render() {
    const { height } = this.state;
    const { width } = this.state;

    return (
      <View style={styles.MainContainer}>
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

  MainContainer: {
    flex: 1,
    position: 'relative',
  },
});