import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './NavigationService';

import { History } from '../screens/main';
import Support from '../screens/main/home/Support';


const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <Support/>
      {/* <History/> */}
      
    </NavigationContainer>
  );
};

export default RootNavigation;
