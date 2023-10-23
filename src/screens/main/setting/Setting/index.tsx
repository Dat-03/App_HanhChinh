import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions} from '../../../../redux';

const Setting = () => {
  const dispatch = useAppDispatch();

  const signOut = async () => {
    try {
      dispatch(AuthActions.Logout());
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
    } catch (error) {
      Alert.alert('Logout failed');
    }
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
