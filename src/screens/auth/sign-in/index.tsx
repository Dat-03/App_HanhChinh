import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import styles from './styles';
import {Image} from '@rneui/themed';
import images from '../../../assets/images';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {AuthActions} from '../../../redux';
import {
  getAuthRoleUser,
  getAuthUser,
} from '../../../redux/selectors/authen.selector';
import {signInWithGoogleAsync} from '../../../utils/google';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const dataUserApi = useAppSelector(getAuthUser);
  const dataRoleApi = useAppSelector(getAuthRoleUser);

  const signIn = async () => {
    const userSignIn = await signInWithGoogleAsync();
    if (userSignIn) {
      const email = userSignIn.user.email;
      dispatch(
        AuthActions.handleLogin({
          email: email,
          device_token: 'thao',
        }),
      );
    } else {
      console.log('login fail');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundHeader} />
      <View style={styles.loginContainer}>
        <Image
          resizeMode="contain"
          style={styles.imageLogoStyle}
          source={images.logoFPT}
        />
        <Image
          resizeMode="cover"
          style={styles.imageBeeStyle}
          source={images.bee}
        />
        <TouchableOpacity style={styles.btnGoogle} onPress={signIn}>
          <Image
            resizeMode="cover"
            style={styles.imageGoogle}
            source={images.google}
          />
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
