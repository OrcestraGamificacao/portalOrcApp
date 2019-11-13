import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '~/styles';


import Membros from './pages/Membros/index';

import Main from '~/pages/Main';

import Activities from './pages/Activities';

// import Tasks from './pages/Tasks';
// import Profile from './pages/Profile';

Icon.loadFont();


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

const ActivitiesSatck = createStackNavigator(
  { Activities },
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

// const TasksStack = createStackNavigator(
//   { Tasks },
//   {
//   headerLayoutPreset: 'center',
//   headerBackTitleVisible: false,
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: colors.greenOrc,
//     },
//     headerTintColor: colors.duckYellow,
//   },
// },
// );

// const ProfileStack = createStackNavigator(
//   { Profile },
//   {
//     headerLayoutPreset: 'center',
//     headerBackTitleVisible: false,
//     defaultNavigationOptions: {
//     headerStyle: {
//     backgroundColor: colors.greenOrc,
//     },
//     headerTintColor: colors.duckYellow,
//   },
// },
// );


const stackBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Inicio: {
      screen: mainStack,
      navigationOptions: () => ({
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ focused }) => (
          <Icon name="home" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
        ),
      }),
    },
    Atividades: {
      screen: ActivitiesSatck,
      navigationOptions: () => ({
        tabBarLabel: 'Atividades',
        tabBarIcon: ({ focused }) => (
          <Icon name="line-chart" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
        ),
      }),
    },
    // Tarefas: {
    //   screen: TasksStack,
    //   navigationOptions: () => ({
    //     tabBarLabel: 'Tarefas',
    //     tabBarIcon: ({ focused }) => (
    //       <Icon name="check-square-o" type="Icon"
    //        size={20} color={focused ? '#7AAF50' : '#808080'} />
    //     ),
    //   }),
    // },
    Membros: {
      screen: MembrosStack,
      navigationOptions: () => ({
        tabBarLabel: 'Membros',
        tabBarIcon: ({ focused }) => (
          <Icon name="group" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
        ),
      }),
    },
  //   Perfil: {
  //     screen: ProfileStack,
  //     navigationOptions: () => ({
  //       tabBarLabel: 'Perfil',
  //       tabBarIcon: ({ focused }) => (
  //         <Icon name="user" type="Icon" size={20} color={focused ? '#7AAF50' : '#808080'} />
  //       ),
  //     }),
  //   },
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
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
