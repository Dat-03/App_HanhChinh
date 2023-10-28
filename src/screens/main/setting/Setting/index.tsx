import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions} from '../../../../redux';
import {LogOut} from '../../../../utils/google';

const Setting = () => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(AuthActions.Logout());
    LogOut();
  };
  return (
    <View>
      <TouchableOpacity
        style={{height: 100, width: 100, backgroundColor: 'yellow'}}
        onPress={signOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
