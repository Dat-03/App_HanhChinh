import {Text, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import ButtonContent from './components/ButtonContent';
import useStyles from './styles';
import Header_home from './components/Header';

const HomeManage: FunctionComponent = () => {
  const styles = useStyles();
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
