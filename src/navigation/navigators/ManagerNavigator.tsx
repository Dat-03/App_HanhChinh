import React from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {routes} from '../../constants';
import {authScreen} from '../../screens/auth';
import {Screen} from '../../types';

import {useAppSelector} from '../../hooks';
import {getAppIsReady} from '../../redux/selectors/app.selector';
import {managerScreen} from '../../screens/Manager';

const isReady: boolean = useAppSelector(getAppIsReady);
const ManagerStack = createStackNavigator();

const managerScreenapp: Screen[] = [...managerScreen];

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigator = () => {
  return (
    <ManagerStack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routes.LOBBY}>
      {managerScreenapp.map(screen => {
        return (
          <ManagerStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </ManagerStack.Navigator>
  );
};

export default AuthNavigator;
