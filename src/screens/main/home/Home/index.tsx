import {TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@rneui/base';
import React, {FunctionComponent} from 'react';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ReportActions, getHistoryReportTeacher} from '../../../../redux';
import CreateReport from '../CreateReport';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const dataTeacher = useAppSelector(getHistoryReportTeacher);
  console.log(dataTeacher);
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {/* <Button onPress={() => dispatch(ReportActions.getListHistoryTeacher(1))}>
        Get
      </Button>
      <Text>{JSON.stringify(dataTeacher)}</Text> */}
      <Button onPress={() => NavigationService.navigate(routes.CREATE_REPORT)}>
        Hello
      </Button>
      <Button onPress={() => NavigationService.navigate(routes.UP_IMAGE)}>
        Hello1
      </Button>
    </View>
  );
};

export default Home;
