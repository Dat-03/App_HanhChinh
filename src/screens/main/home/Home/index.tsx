import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import {HeaderCustom} from '../../../../components';
import {ButtonContent} from './components';

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 24}}>
        <HeaderCustom
          leftIcon={{name: 'user', type: 'font-awesome'}}
          title="Nguyễn Văn A"
          titleStyle={styles.textHeader}
          rightIcon={{name: 'bell', type: 'font-awesome', color: 'white'}}
        />
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

export default Home;
