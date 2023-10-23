import {Image, Text, TouchableOpacity, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import {Icon} from '@rneui/themed';
import styles from './styles';
import {images} from '../../../../../../assets';

const Header_home: FunctionComponent = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={{width: 64, height: 64, borderRadius: 99}}
          source={images.avatar}
        />
      </TouchableOpacity>

      <Text style={styles.textName}>Nguyễn Văn A</Text>
      <TouchableOpacity>
        <Icon name="bell" type="font-awesome-5" color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header_home;
