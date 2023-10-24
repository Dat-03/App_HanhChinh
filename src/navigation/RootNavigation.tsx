import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import NVHCNavigator from './navigators/NVHCNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';
import {getAuthRoleUser} from '../redux/selectors/authen.selector';
import AppNavigator from './navigators/AppNavigator';
import ManagerNavigator from './navigators/ManagerNavigator';

const RootNavigation = () => {
  const dataRoleApi = useAppSelector(getAuthRoleUser);

  console.log('user api role :', dataRoleApi);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      {dataRoleApi === 'TEACHER' ? (
        <AppNavigator />
      ) : dataRoleApi === 'ADMIN' ? (
        <NVHCNavigator />
      ) : dataRoleApi == 'MANAGER' ? (
        <ManagerNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;
