import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import {useAppSelector} from '../hooks';
import {getAuthRoleUser} from '../redux/selectors/authen.selector';
import {Timelineitem} from '../screens/main/home/Support/components';
import AppNavigator from './navigators/AppNavigator';

const RootNavigation = () => {
  const dataRoleApi = useAppSelector(getAuthRoleUser);

  console.log('user api role :', dataRoleApi);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />

      {/* {dataRoleApi === 'TEACHER' ? (
        <AppNavigator />
      ) : dataRoleApi === 'ADMIN' ? (
        <NVHCNavigator />
      ) : dataRoleApi == 'MANAGER' ? (
        <ManagerNavigator />
      ) : (
        <AuthNavigator />
      )} */}
    </NavigationContainer>
  );
};

export default RootNavigation;
