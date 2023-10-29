import {Image, View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import {HeaderCustom} from '../../../../components';
import {images} from '../../../../assets';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions} from '../../../../redux';
import {LogOut} from '../../../../utils/google';

const SettingManage: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(AuthActions.Logout());
    LogOut();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
        rightIcon={{name: 'bell', type: 'evilicon', color: 'white'}}
      />
      <View style={styles.view}>
        <Image style={styles.image} source={images.avatar} />
        <View style={styles.viewInfo}>
          <Text style={styles.nameUser}>Nguyễn Văn A</Text>
          <Text style={styles.phone}>0123456789</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={{}}>
          <Icon name="user-o" type="font-awesome" />
        </View>
      </View>

      <TouchableOpacity onPress={signOut} style={{backgroundColor: 'blue'}}>
        <Text style={{fontSize: 40}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingManage;
