import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '~/styles';

import Main from '~/pages/Main';
import Splash from '~/pages/splashScreen';
import Login from '~/pages/Login';

const Routes = createAppContainer(createStackNavigator(
  { Login },
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
));

export default Routes;
