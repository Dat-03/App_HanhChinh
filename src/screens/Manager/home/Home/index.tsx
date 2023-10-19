import {Text, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {ButtonContent, Header_home} from './components';

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
          <View style={styles.content}>
            <ButtonContent />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeManage;
