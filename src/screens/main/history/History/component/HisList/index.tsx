import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ItemHisList from './itemHisList';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  ReportActions,
  getDataReportTeacher,
  getHistoryReportTeacher,
  getTotalPageHistoryTeacher,
} from '../../../../../../redux';
import {
  HistoryReportType,
  ReportType,
} from '../../../../../../redux/types/report.type';

const HisList: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const totalPage = useAppSelector(getTotalPageHistoryTeacher);

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
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreHistory}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default HisList;
