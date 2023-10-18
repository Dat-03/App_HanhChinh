import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';

import Support from '../screens/main/home/Support';
import { History } from '../screens/main';

import {HomeManager} from '../screens/Manager';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      {/* <Support /> */}
      <History/>
    </NavigationContainer>
  );
};

export default RootNavigation;
