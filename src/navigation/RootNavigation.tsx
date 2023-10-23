import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import NVHCNavigator from './navigators/NVHCNavigator';
import AppNavigator from './navigators/AppNavigator';
import ManagerNavigator from './navigators/ManagerNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <ManagerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
