import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';

const SignIn = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '71174207638-f592bchep4n26turj77r886pagt8197a.apps.googleusercontent.com',
    });
  }, []);
  const signInWithGoogleAsync = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Get the user's ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userSignIn = await auth().signInWithCredential(googleCredential);

      console.log('User signed in:', userSignIn.user);
      Alert.alert('Logged in successfully');
      NavigationService.navigate(routes.MYPROFILE);

      // LSuccessful login moves to the Home screen
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google Sign-In canceled.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google Sign-In already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services not available.');
      } else {
        console.error('Google Sign-In Error:', error);
        Alert.alert('Login failed 1');
      }
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        onPress={signInWithGoogleAsync}>
        <Text>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
