import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

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
    },
    style: {
      backgroundColor: 'white',
    },
    upperCaseLabel: false,
  },
}));

export default TopTab;
