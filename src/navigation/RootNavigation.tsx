import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './NavigationService';

import AppNavigator from './navigators/AppNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
