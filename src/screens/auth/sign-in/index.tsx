import {Image} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../assets';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {AuthActions} from '../../../redux';
import {getAuthRoleUser} from '../../../redux/selectors/authen.selector';
import {signInWithGoogleAsync} from '../../../utils/google';
import styles from './styles';

const SignIn = () => {
  const dispatch = useAppDispatch();

  const dataRoleApi = useAppSelector(getAuthRoleUser);

  const signIn = async () => {
    const userSignIn = await signInWithGoogleAsync();
    if (userSignIn?.user.photoURL) {
      dispatch(AuthActions.setImage(userSignIn.user.photoURL));
    }
    if (userSignIn) {
      const email = userSignIn.user.email;
      dispatch(
        AuthActions.handleLogin({
          email: email,
          device_token: 'dat',
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
