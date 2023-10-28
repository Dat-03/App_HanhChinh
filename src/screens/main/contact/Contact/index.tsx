import React, {FunctionComponent, useState} from 'react';

import {View} from 'react-native';

import styles from './styles';
import {Text} from '@rneui/base';
import {HeaderCustom} from '../../../../components';
import {Icon} from '@rneui/themed';
import {ItemContact} from './components';

const Contact: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewheader}>
        <Text style={styles.textHeader}>Liên hệ</Text>
      </View>
      <View style={{paddingHorizontal: 24}}>
        <Text style={styles.textRoom}>Phòng kỹ thuật</Text>
        <View>
          <ItemContact />
        </View>
      </View>
      <View style={{paddingHorizontal: 24}}>
        <Text style={styles.textRoom}>Phòng hành chính</Text>
        <View>
          <ItemContact />
        </View>
      </View>
    </View>
  );
};

export default Contact;
