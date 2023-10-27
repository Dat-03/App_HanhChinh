import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '@rneui/themed';
import Switch_custom from '../../../../../../components/customs/Switch';
const Content: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.viewIcon}>
          <Icon name="user" type="feather" />
        </View>
        <Text style={styles.textContent}>Chỉnh sửa tài khoản</Text>
        <View>
          <Icon name="right" type="antdesign" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.viewIcon}>
          <Icon name="bell" type="feather" />
        </View>
        <Text style={styles.textContent2}>Tắt thông báo</Text>
        <View style={styles.viewSwitch}>
          <Switch_custom />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.viewIcon}>
          <Icon name={isLoggedIn ? 'log-out' : 'log-in'} type="feather" />
        </View>
        <Text style={styles.textContent2}>
          {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
