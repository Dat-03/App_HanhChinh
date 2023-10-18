import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';

import {HomeManager} from '../screens/Manager';
import Achievement from '../screens/Manager/home/Achievement';
import Personnel from '../screens/Manager/home/Personnel';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <Personnel />
    </NavigationContainer>
  );
};

export default RootNavigation;
