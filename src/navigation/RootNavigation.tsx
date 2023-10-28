import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import NVHCNavigator from './navigators/NVHCNavigator';
import ManagerNavigator from './navigators/ManagerNavigator';
import AppNavigator from './navigators/AppNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      {/* <AppNavigator/> */}
      <NVHCNavigator/>
      {/* <ManagerNavigator/> */}
    </NavigationContainer>
  );
};

export default RootNavigation;
