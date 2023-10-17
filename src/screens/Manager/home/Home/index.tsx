import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import { BigButton, ButtonCustom } from '../../../../components';

const HomeManage: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <BigButton textButton='haha'/>
    </View>
  );
};

export default HomeManage;
