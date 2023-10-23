import {Text, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import {ButtonContent, Header_home} from './components';

const HomeManage: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header_home />
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>Dịch vụ trưc tuyến </Text>
        <View style={styles.button}>
          <ButtonContent />
        </View>
      </View>
    </View>
  );
};

export default HomeManage;
