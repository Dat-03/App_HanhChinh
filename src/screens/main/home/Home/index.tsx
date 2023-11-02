import {Image, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Text} from '@rneui/base';

import React, {FunctionComponent, useEffect} from 'react';

import {images} from '../../../../assets';
import {ButtonContent} from './components';
import styles from './styles';
import {HeaderCustom} from '../../../../components';

import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  ReportActions,
  getAuthUser,
  getDataReportTeacher,
  getHistoryReportTeacher,
  getImageUser,
} from '../../../../redux';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const dataUserApi = useAppSelector(getAuthUser);
  const imageUser = useAppSelector(getImageUser);

  useEffect(() => {
    dispatch(ReportActions.getListCreateReport());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: imageUser}} />
          <Text style={styles.textName}>{dataUserApi.name}</Text>
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
