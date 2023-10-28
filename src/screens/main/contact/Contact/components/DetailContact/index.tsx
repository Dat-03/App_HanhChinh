import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../../../navigation';
import {images} from '../../../../../../assets';

const DetailContact: React.FC = () => {
  const handleGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Icon name="left" type="antdesign" onPress={handleGoback} />
        <Text style={styles.textHeader}>Trở về</Text>
      </View>
      <View style={styles.viewUser}>
        <Image style={styles.image} source={images.avatar} />
        <View style={styles.viewText}>
          <Text style={styles.textUser}>Nguyễn Văn A</Text>
          <Text style={styles.textRole}>Trưởng phòng IT</Text>
        </View>
      </View>
      <View style={styles.viewContent}>
        <View style={styles.viewtextContent}>
          <View>
            <Text style={styles.textphone}>số điện thoại</Text>
            <Text style={styles.textnumber}>0123456789</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Icon name="phone" type="font-awesome" color={'#2245AC'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailContact;
