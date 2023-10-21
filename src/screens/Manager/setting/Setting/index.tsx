import {Image, View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {images} from '../../../../assets';
import {Icon} from '@rneui/themed';

const SettingManage: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
        rightIcon={{name: 'bell', type: 'evilicon', color: 'white'}}
      />
      <View style={{alignItems: 'center', paddingVertical: 20}}>
        <Image
          style={{width: 81, height: 81, borderRadius: 90}}
          source={images.avatar}
        />
        <View style={{paddingVertical: 15}}>
          <Text style={{color: 'white', fontSize: 20}}>Nguyễn Văn A</Text>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            0123456789
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={{}}>
          <Icon name="user-o" type="font-awesome" />
        </View>
      </View>
    </View>
  );
};

export default SettingManage;
