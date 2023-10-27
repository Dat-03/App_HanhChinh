import {TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@rneui/base';
import React, {FunctionComponent, useEffect} from 'react';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  ReportActions,
  getHistoryReportTeacher,
  getListRoom,
  getListTypeReport,
} from '../../../../redux';
import CreateReport from '../CreateReport';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const dataTeacher = useAppSelector(getHistoryReportTeacher);
  const listRoom = useAppSelector(getListRoom);
  const listTypeReport = useAppSelector(getListTypeReport);
  const styles = useStyles();

  useEffect(() => {
    dispatch(ReportActions.getListCreateReport());
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(listRoom)}</Text>
      <Text>{JSON.stringify(listTypeReport)}</Text> */}
      <Button onPress={() => NavigationService.navigate(routes.CREATE_REPORT)}>
        Hello
      </Button>
    </View>
  );
};

export default Home;
