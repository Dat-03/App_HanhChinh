import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import NVHCNavigator from './navigators/NVHCNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <NVHCNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
