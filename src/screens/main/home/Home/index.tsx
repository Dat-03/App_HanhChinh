import {TouchableOpacity, View} from 'react-native';
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
      <View style={{paddingHorizontal: 24}}>
        <HeaderCustom
          leftIcon={{name: 'user', type: 'font-awesome'}}
          title="Nguyễn Văn A"
          titleStyle={styles.textHeader}
          rightIcon={{name: 'bell', type: 'font-awesome', color: 'white'}}
        />
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
