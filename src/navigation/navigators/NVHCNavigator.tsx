import React from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import {routes} from '../../constants';
import {
  historyNVHCScreens,
  homeNVHCScreens,
  settingNVHCScreens,
} from '../../screens/NVHC';
import {Screen} from '../../types';
import BottomNVHC from './BottomNVHC';

const AppStack = createStackNavigator();

const screenOption: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const nvhcScreens: Screen[] = [
  {
    name: routes.BOTTOMNVHC,
    component: BottomNVHC,
  },
  ...homeNVHCScreens,
  ...historyNVHCScreens,
  ...settingNVHCScreens,
];

const NVHCNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={screenOption}
      initialRouteName={routes.BOTTOMNVHC}>
      {nvhcScreens.map((screen: Screen) => {
        return (
          <AppStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </AppStack.Navigator>
  );
};

export default NVHCNavigator;
