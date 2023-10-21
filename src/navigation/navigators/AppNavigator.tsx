import React from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';

import {routes} from '../../constants';
import {Screen} from '../../types';
import {
  homeScreens,
  historyScreens,
  contactScreens,
  settingScreens,
} from '../../screens/main';
import {
  historyManagerScreens,
  homeManagerScreens,
  managerScreen,
  settingManagerScreens,
} from '../../screens/Manager';
import BottomManager from './BottomManager';

const AppStack = createStackNavigator();

const screenOption: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const mainScreens: Screen[] = [
  {
    name: routes.BOTTOM_TAB,
    component: BottomNavigator,
  },
  ...homeScreens,
  ...historyScreens,
  ...contactScreens,
  ...settingScreens,
];
const managerScreens: Screen[] = [
  {
    name: routes.BOTTOMMANAGER,
    component: BottomManager,
  },
  ...homeManagerScreens,
  ...historyManagerScreens,
  ...settingManagerScreens,
];

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={screenOption}
      initialRouteName={routes.BOTTOM_TAB}>
      {mainScreens.map((screen: Screen) => {
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

export default AppNavigator;
