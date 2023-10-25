import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '71174207638-f592bchep4n26turj77r886pagt8197a.apps.googleusercontent.com',
});

export const signInWithGoogleAsync = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userSignIn = await auth().signInWithCredential(googleCredential);
    return userSignIn;
  } catch (error: any) {
    console.error('Google Sign-In Error:', error);
  }
};

export const LogOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};
