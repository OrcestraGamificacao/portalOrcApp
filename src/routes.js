import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '~/styles';

import Main from '~/pages/TasksPage';
import Calendario from '~/pages/TasksPage/Calendario';

const Routes = createAppContainer(createStackNavigator(
  { Main, Calendario },
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
