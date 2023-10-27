import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../../../assets';
import {Content} from './components';
import styles from './styles';

const Setting: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Icon name="left" type="antdesign" color={'white'} />
      </View>
      <View style={styles.viewUser}>
        <Image style={styles.image} source={images.avatar} />
        <View style={styles.viewText}>
          <Text style={styles.textUser}>Nguyễn Văn A</Text>
          <Text style={styles.textphone}>0123456789</Text>
        </View>
      </View>
      <View style={styles.viewContent}>
        <Content />
      </View>
    </View>
  );
};

export default Setting;
