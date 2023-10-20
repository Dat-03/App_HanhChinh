import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from '../screens/main';
import { navigationRef } from './NavigationService';
import { HomeManager } from '../screens/Manager';
import Personnel from '../screens/Manager/home/Personnel';
import Report from '../screens/main/home/Report';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      {/* <AppNavigator /> */}
      <Home/>
    </NavigationContainer>
  );
};

export default RootNavigation;
