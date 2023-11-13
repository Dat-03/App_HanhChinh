import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ItemHisList from './itemHisList';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  LoadingActions,
  ReportActions,
  getDataReportTeacher,
  getHistoryReportTeacher,
  getIsReset,
  getTotalPageHistoryTeacher,
} from '../../../../../../redux';
import {
  HistoryReportType,
  ReportType,
} from '../../../../../../redux/types/report.type';
import {NavigationService} from '../../../../../../navigation';

const HisList: React.FC = () => {
  const reset = useAppSelector(getIsReset);

  console.log(reset);

  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const totalPage = useAppSelector(getTotalPageHistoryTeacher);

  useEffect(() => {
    if (reset) {
      setPage(1);
      dispatch(ReportActions.getListHistoryTeacher({page: page, pageSize: 10}));
      dispatch(LoadingActions.hideReset());
    }
  }, [reset]);

  useEffect(() => {
    dispatch(ReportActions.getListHistoryTeacher({page: page, pageSize: 10}));
  }, [page]);

  const loadMoreHistory = () => {
    if (totalPage && page < totalPage) {
      console.log(totalPage);
      setPage(page + 1);
    }
  };

  const dataHistory = useAppSelector(getHistoryReportTeacher);

  const render = ({item}: {item: ReportType}) => <ItemHisList {...item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch Sử</Text>
      {/* Flat List */}
      <FlatList
        data={dataHistory}
        renderItem={render}
        keyExtractor={item => item._id}
        onEndReached={loadMoreHistory}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default HisList;
