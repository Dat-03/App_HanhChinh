import {View} from 'react-native';
import {Button, Text} from '@rneui/base';
import React, {FunctionComponent} from 'react';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ReportActions, getHistoryReportTeacher} from '../../../../redux';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const dataTeacher = useAppSelector(getHistoryReportTeacher);
  console.log(dataTeacher);
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Button onPress={() => dispatch(ReportActions.getListHistoryTeacher(1))}>
        Get
      </Button>
      <Text>{JSON.stringify(dataTeacher)}</Text>
    </View>
  );
};

export default Home;
