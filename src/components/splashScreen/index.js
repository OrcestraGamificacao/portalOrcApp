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

  async componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.width, // The animated value to drive
        {
          toValue: 360, // Animate to opacity: 1 (opaque)
          duration: 100, // Make it take a while
        },
      ),
      Animated.timing(
        this.state.height, // The animated value to drive
        {
          toValue: 750, // Animate to opacity: 1 (opaque)
          duration: 1800, // Make it take a while
        },
      ),
    ]).start(() => {
      // End of animations
      // How to navigate to Login ? => Use StackNavigation
      this.props.navigation.navigate('Main');
    });
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
    flex: 1,
    position: 'relative',
  },
});

App.navigationOptions = {
  header: null,
};
