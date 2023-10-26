import React, {FunctionComponent, useState} from 'react';

import {View} from 'react-native';

import styles from './styles';
import {Text} from '@rneui/base';
import UpImage from '../../home/CreateReport/components/UpImage';

const Contact: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <UpImage />
    </View>
  );
};

export default Contact;
