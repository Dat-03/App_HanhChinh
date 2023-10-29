import { Text } from '@rneui/base';
import { Image, View } from 'react-native';

import React, { FunctionComponent } from 'react';

import { Icon } from '@rneui/themed';
import { images } from '../../../../assets';
import { ButtonContent } from './components';
import styles from './styles';

const Home: FunctionComponent = () => {
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.image} source={images.avatar} />
          <Text style={styles.textName}>Nguyễn Văn A</Text>
        </View>

        <Icon name="bell" type="simple-line-icon" color={'white'} size={20} />
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
