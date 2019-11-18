import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { colors, fonts } from '~/styles';

import Minhas from './tabs/minhasTab';
import Delegadas from './tabs/delegadasTab';
import Concluidas from './tabs/concluidasTab';

const TopTab = createAppContainer(createMaterialTopTabNavigator({
  Minhas,
  Delegadas,
  Concluidas,
}, {
  tabBarOptions: {
    labelStyle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: fonts.input,
    },
    style: {
      backgroundColor: 'white',
    },
    upperCaseLabel: false,
    pressColor: colors.greenOrcLight,
  },
}));

export default TopTab;
