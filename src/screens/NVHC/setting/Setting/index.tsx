import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../assets';

import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {AuthActions, getAuthUser, getImageUser} from '../../../../redux';
import {LogOut} from '../../../../utils/google';
import {Content} from './components';

const Setting: FunctionComponent = () => {
  const dataUserApi = useAppSelector(getAuthUser);
  const imageUser = useAppSelector(getImageUser);

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Icon name="left" type="antdesign" color={'white'} />
      </View>
      <View style={styles.viewUser}>
        <Image style={styles.image} source={{uri: imageUser}} />
        <View style={styles.viewText}>
          <Text style={styles.textUser}>{dataUserApi.name}</Text>
          <Text style={styles.textphone}>{dataUserApi.phone}</Text>
        </View>
      </View>
      <View style={styles.viewContent}>
        <Content />
      </View>
    </View>
  );
};

export default Setting;
