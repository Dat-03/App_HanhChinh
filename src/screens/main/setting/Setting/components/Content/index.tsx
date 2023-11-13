import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '@rneui/themed';
import Switch_custom from '../../../../../../components/customs/Switch';
import {useAppDispatch} from '../../../../../../hooks';
import {AuthActions, ReportActions} from '../../../../../../redux';
import {LogOut} from '../../../../../../utils/google';
const Content: React.FC = () => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(ReportActions.clearListHistoryTeacher());
    dispatch(AuthActions.Logout());
    LogOut();
  };
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.viewcontent}>
          <View style={styles.viewIcon}>
            <Icon name="user" type="feather" />
          </View>
          <Text style={styles.textContent}>Chỉnh sửa tài khoản</Text>
        </View>

        <View>
          <Icon name="right" type="antdesign" />
        </View>
      </TouchableOpacity>
      <View style={styles.btn}>
        <View style={styles.viewcontent}>
          <View style={styles.viewIcon}>
            <Icon name="bell" type="feather" />
          </View>
          <Text style={styles.textContent}>Tắt thông báo</Text>
        </View>

        <View style={styles.viewSwitch}>
          <Switch_custom />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={signOut}>
        <View style={styles.viewcontent}>
          <View style={styles.viewIcon}>
            <Icon name={'log-out'} type="feather" />
          </View>
          <Text style={styles.textContent}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
