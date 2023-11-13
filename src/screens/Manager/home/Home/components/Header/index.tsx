import {Image, Text, TouchableOpacity, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import {Icon} from '@rneui/themed';
import styles from './styles';
import {images} from '../../../../../../assets';
import {getAuthUser, getImageUser} from '../../../../../../redux';
import {useAppSelector} from '../../../../../../hooks';

const Header_home: FunctionComponent = () => {
  const dataUserApi = useAppSelector(getAuthUser);
  const imageUser = useAppSelector(getImageUser);
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={{width: 64, height: 64, borderRadius: 99}}
          source={{uri: imageUser}}
        />
      </TouchableOpacity>

      <Text style={styles.textName}>{dataUserApi.name}</Text>
      <TouchableOpacity>
        <Icon name="bell" type="font-awesome-5" color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header_home;
