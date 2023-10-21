import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './NavigationService';

import { History } from '../screens/main';
import Support from '../screens/main/home/Support';
import AppNavigator from './navigators/AppNavigator';


const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      {/* <Support/> */}
      {/* <History/> */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
