import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

import {Icon} from '@rneui/themed';
import { HeaderCustom } from '../../../../../../../components';
import { NavigationService } from '../../../../../../../navigation';
import { routes } from '../../../../../../../constants';
import { images } from '../../../../../../../assets';


const DetailPersonal: React.FC = () => {
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PERSONNEL);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
        onPressLeftIcon={handlePressGoback}
        rightIcon={{name: 'bell', type: 'font-awesome-5', color: 'white'}}
      />
      <View style={{alignItems: 'center', paddingTop: 10}}>
        <Image
          style={{width: 64, height: 64, borderRadius: 50}}
          source={images.avatar}
        />
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Nguyễn Văn A
          </Text>
          <Text style={{color: 'white', fontSize: 15}}>Trưởng phòng IT</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 24,
          }}>
          <View>
            <Text>Số điện thoại</Text>
            <Text>0123456789</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 55,
              height: 55,
              backgroundColor: 'gray',
              borderRadius: 99,
              justifyContent: 'center',
            }}>
            <Icon name="call" type="ionicons" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 24,
          }}>
          <View>
            <Text>Số điện thoại</Text>
            <Text>0123456789</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 55,
              height: 55,
              backgroundColor: 'gray',
              borderRadius: 99,
              justifyContent: 'center',
            }}>
            <Icon name="edit" type="feather" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Đánh giá</Text>

          <Text>Toàn bộ đánh giá {'>'} </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailPersonal;
