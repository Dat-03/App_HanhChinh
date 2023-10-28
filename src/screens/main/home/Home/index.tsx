import {Image, TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent, useEffect} from 'react';

import styles from './styles';
import {HeaderCustom} from '../../../../components';
import {ButtonContent} from './components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  ReportActions,
  getHistoryReportTeacher,
  getListRoom,
  getListTypeReport,
} from '../../../../redux';
import {images} from '../../../../assets';
import {Icon} from '@rneui/themed';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const dataTeacher = useAppSelector(getHistoryReportTeacher);
  const listRoom = useAppSelector(getListRoom);
  const listTypeReport = useAppSelector(getListTypeReport);
  useEffect(() => {
    dispatch(ReportActions.getListCreateReport());
  }, []);
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
