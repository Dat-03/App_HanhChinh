import {Image, Text, TouchableOpacity, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import {Icon} from '@rneui/themed';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUser, getImageUser} from '../../../../../../redux';

const Header_home: FunctionComponent = () => {
  const user = useAppSelector(getAuthUser);
  const imgUser = useAppSelector(getImageUser);
  const styles = useStyles();
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={{width: 64, height: 64, borderRadius: 99}}
          source={{uri: imgUser}}
        />
      </TouchableOpacity>

      <Text style={styles.textName}>{user.name}</Text>
      <TouchableOpacity>
        <Icon name="bell" type="font-awesome-5" color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header_home;
