import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';

import {useAppSelector} from '../hooks';
import {getAuthRoleUser} from '../redux/selectors/authen.selector';
import {Timelineitem} from '../screens/main/home/Support/components';
import AppNavigator from './navigators/AppNavigator';
import NVHCNavigator from './navigators/NVHCNavigator';
import ManagerNavigator from './navigators/ManagerNavigator';
import AuthNavigator from './navigators/AuthNavigator';

const RootNavigation = () => {
  const dataRoleApi = useAppSelector(getAuthRoleUser);

  console.log('user api role :', dataRoleApi);

  let navigationComponent;

  switch (dataRoleApi) {
    case 'TEACHER':
      navigationComponent = <AppNavigator />;
      break;
    case 'ADMIN':
      navigationComponent = <NVHCNavigator />;
      break;
    case 'MANAGER':
      navigationComponent = <ManagerNavigator />;
      break;
    default:
      navigationComponent = <AuthNavigator />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {navigationComponent}
    </NavigationContainer>
  );
};

export default RootNavigation;
