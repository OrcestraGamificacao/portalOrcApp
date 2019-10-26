import React from 'react';
import {
  Image, View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

const orcImage = () => (
  <Image
    style={styles.imageOrc}
    source={require('~/assets/images/orc_wow.png')}
  />
);

const addButton = () => (
  <TouchableOpacity
    style={styles.addButtonStyle}
  >
    <Text style={styles.addButtonTextStyle}>+</Text>
  </TouchableOpacity>
);

const NavBar = () => (
  <View />
);

NavBar.navigationOptions = {
  title: 'Tarefas',
  headerLeft: orcImage,
  headerRight: addButton,
};

export default NavBar;

const styles = StyleSheet.create({
  imageOrc: {
    width: 50,
    height: 50,
  },

  addButtonStyle: {
    height: 42,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
  },

  addButtonTextStyle: {
    fontSize: 54,
    color: '#FFF',
  },
});
