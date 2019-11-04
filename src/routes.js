import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles';


import Membros from './pages/Membros/index';

import Main from '~/pages/Main';

import Activities from './pages/Activities';

// import Tasks from './pages/Tasks';
// import Profile from './pages/Profile';

Icon.loadFont();
IconMaterial.loadFont();
IconIon.loadFont();

const mainStack = createStackNavigator(
  { Main },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.greenOrc,
      },
      headerTintColor: colors.duckYellow,
    },
  },
);

const MembrosStack = createStackNavigator(
  { Membros },
);

const ActivitiesSatck = createStackNavigator(
  { Activities },
);

// const TasksStack = createStackNavigator(
//   { Tasks },
// );

// const ProfileStack = createStackNavigator(
//   { Profile },
// );


const stackBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Membros: {
      screen: MembrosStack,
      navigationOptions: () => ({
        tabBarLabel: 'Membros',
        tabBarIcon: ({ focused }) => (
          <Icon name="group" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
        ),
      }),
    },
    Inicio: {
      screen: mainStack,
      navigationOptions: () => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Icon name="home" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
        ),
      }),
    },
    Activities: {
      screen: ActivitiesSatck,
      navigationOptions: () => ({
        tabBarLabel: 'Activities',
        tabBarIcon: ({ focused }) => (
          <Icon name="line-chart" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
        ),
      }),
    },
    // Tarefas: {
    //   screen: mainStack,
    //   navigationOptions: () => ({
    //     tabBarLabel: 'Tarefas',
    //     tabBarIcon: ({ focused }) => (
    //       <Icon name="home" type="FontAwesome" size={20} color={focused ? '#7AAF50' : '#808080'} />
    //     ),
    //   }),
    // },
    // Perfil: {
    //   screen: mainStack,
    //   navigationOptions: () => ({
    //     tabBarLabel: 'Perfil',
    //     tabBarIcon: ({ focused }) => (
    //       <Icon name="home" type="FontAwesome" size={20} color={focused ? '#7AAF50' : '#808080'} />
    //     ),
    //   }),
    // },
  },
  {
    inicialRouteName: 'Home',
    activeColor: '#7AAF50',
    barStyle: { backgroundColor: '#DCDCDC' },
    tabBarOptions: {
      showIcon: true,
      showLabel: true,

    },
    defaultNavigationOptions: {
      tabBarVisible: 'off',
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    App: stackBottomTabNavigator,
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
