import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import Timelineitem from '../screens/main/home/Support/components/Timeline';
import Support from '../screens/main/home/Support';
import Notification_Suport from '../screens/main/home/Support/components/Notification';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <Support />
    </NavigationContainer>
  );
};

export default RootNavigation;
