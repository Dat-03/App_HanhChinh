import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from '../screens/main';
import Report from '../screens/main/home/Report';
import {navigationRef} from './NavigationService';

import NVHCNavigator from './navigators/NVHCNavigator';
import FloorRoom from '../screens/NVHC/home/FloorRoom';
import DetailFloor from '../screens/NVHC/home/DetailFloor';
import CheckingRoom from '../screens/NVHC/home/CheckingRoom';
import ItemList from '../screens/NVHC/home/CheckingRoom/components/itemlist';
import FloorRoom2 from '../screens/NVHC/home/FlooRoom2';
import Room from '../screens/NVHC/home/FlooRoom2/component/Room';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <NVHCNavigator/>
    </NavigationContainer>
  );
};

export default RootNavigation;
