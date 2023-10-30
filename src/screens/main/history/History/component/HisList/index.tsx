import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import ItemHisList from './itemHisList';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  ReportActions,
  getDataReportTeacher,
  getHistoryReportTeacher,
} from '../../../../../../redux';
import {
  HistoryReportType,
  ReportType,
} from '../../../../../../redux/types/report.type';

const HisList: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(ReportActions.getListHistoryTeacher({page: 1, pageSize: 30}));
  }, []);

  const dataHistory = useAppSelector(getHistoryReportTeacher);
  console.log('data===>', dataHistory);

  const styles = useStyles();
  const render = ({item}: {item: ReportType}) => <ItemHisList {...item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch Sử</Text>
      {/* Flat List */}
      <FlatList
        data={dataHistory}
        renderItem={render}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HisList;
