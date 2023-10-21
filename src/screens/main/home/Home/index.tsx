import { View, Image } from 'react-native';
import { Text } from '@rneui/base';

import React, { FunctionComponent } from 'react';

import useStyles from './styles';
import { images } from '../../../../assets';
import { Icon } from '@rneui/themed';
import Button from './Components/Button';
import { ButtonContent, Header_home } from '../../../Manager/home/Home/components';
import Buttonitem from './Components/Button';
import Header_Home from './Components/Header';



const Home: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View>
        <Header_Home />
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>Dịch vụ trưc tuyến </Text>
        <View style={styles.button}>
          <View style={styles.content}>
            <Buttonitem />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
