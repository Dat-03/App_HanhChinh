import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';

import {HomeManager} from '../screens/Manager';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <HomeManager />
    </NavigationContainer>
  );
};

export default RootNavigation;
