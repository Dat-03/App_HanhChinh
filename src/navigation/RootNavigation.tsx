import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from '../screens/main';
import Report from '../screens/main/home/Report';
import {navigationRef} from './NavigationService';

import Personnel from '../screens/Manager/home/Personnel';
import {HomeManager} from '../screens/Manager';
import AppNavigator from './navigators/AppNavigator';
import { Button } from 'react-native';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
