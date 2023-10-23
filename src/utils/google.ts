import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
export const signOut = async () => {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
  await auth().signOut();
};
