import React from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import {routes} from '../../constants';
import {
  historyManagerScreens,
  homeManagerScreens,
  settingManagerScreens,
} from '../../screens/Manager';
import {Screen} from '../../types';
import BottomManager from './BottomManager';

const AppStack = createStackNavigator();

const screenOption: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const managerScreens: Screen[] = [
  {
    name: routes.BOTTOMMANAGER,
    component: BottomManager,
  },
  ...homeManagerScreens,
  ...historyManagerScreens,
  ...settingManagerScreens,
];

const ManagerNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={screenOption}
      initialRouteName={routes.BOTTOMMANAGER}>
      {managerScreens.map((screen: Screen) => {
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

export default ManagerNavigator;
