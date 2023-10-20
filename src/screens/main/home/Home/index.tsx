import { View, Image } from 'react-native';
import { Text } from '@rneui/base';

import React, { FunctionComponent } from 'react';

import useStyles from './styles';
import { images } from '../../../../assets';
import { Icon } from '@rneui/themed';
import Button from './Components/Button';



const Home: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image source={images.Ellipse} />
          <Text style={styles.name}>Trần Cao Hiệp</Text>
        </View>
        <Icon name='bell' type='font-awesome-5' color="#fff" style={styles.notification} />
      </View>
      <View style={styles.View}>
        <Text style={styles.textconter}>Dịch vụ trực tuyến</Text>
        <View style={styles.button}>
          <Button />
        </View>
      </View>
    </View >
  );
};

export default Home;
