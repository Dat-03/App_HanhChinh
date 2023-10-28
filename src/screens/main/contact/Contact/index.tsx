import React, {FunctionComponent} from 'react';

import {View} from 'react-native';

import {Text} from '@rneui/base';
import {ItemContact} from './components';
import styles from './styles';

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
