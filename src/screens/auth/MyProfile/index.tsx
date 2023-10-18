import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';

const MyProfile = () => {
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log('User signed out successfully.');
      Alert.alert('Logout in successfully');
      NavigationService.navigate(routes.SIGN_IN);
    } catch (error) {
      console.error('Sign out error:', error);
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

export default MyProfile;
