import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '~/styles';

import Main from '~/pages/Main';
import Splash from '~/pages/splashScreen';

const Routes = createAppContainer(createStackNavigator(
  { Splash },
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
