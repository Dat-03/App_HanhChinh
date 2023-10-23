import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import NVHCNavigator from './navigators/NVHCNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';
import {getAuthRoleUser} from '../redux/selectors/authen.selector';
import AppNavigator from './navigators/AppNavigator';

const RootNavigation = () => {
  const dataRoleApi = useAppSelector(getAuthRoleUser);

  console.log('user api role :', dataRoleApi);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      {dataRoleApi === 'TEACHER' ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
