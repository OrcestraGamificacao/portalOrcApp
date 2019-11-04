import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '~/styles';

import Membros from './pages/Membros/index';

import Main from '~/pages/Main';

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

const stackBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Main: { screen: mainStack },
    Membros: { screen: MembrosStack },
  },
  {
    inicialRouteName: 'Home',
    activeColor: '#f0edf6',
    barStyle: { backgroundColor: '#694fad' },
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
