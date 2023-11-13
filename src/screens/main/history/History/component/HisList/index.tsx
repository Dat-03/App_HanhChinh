import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles';
import ItemHisList from './itemHisList';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  LoadingActions,
  ReportActions,
  getDataReportTeacher,
  getHistoryReportTeacher,
  getIsLoadingPage,
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
  const isLoading = useAppSelector(getIsLoadingPage);
  const dataHistory = useAppSelector(getHistoryReportTeacher);

  const scrollRef = useRef<FlatList | null>(null);

  useEffect(() => {
    if (reset) {
      scrollRef?.current?.scrollToOffset({offset: 0, animated: true});
      dispatch(ReportActions.getListHistoryTeacher({page: page, pageSize: 10}));
      dispatch(LoadingActions.hideReset());
      setPage(1);
    }
  }, [reset]);

  useEffect(() => {
    dispatch(ReportActions.getListHistoryTeacher({page: page, pageSize: 10}));
  }, [page]);

  const loadMoreHistory = () => {
    if (totalPage && page < totalPage && !isLoading) {
      console.log(totalPage);
      setPage(page + 1);
    }
  };

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        style={{marginBottom: 10}}
        size={'large'}
        color={'#ec449c'}
      />
    );
  }, []);

  const render = ({item}: {item: ReportType}) => <ItemHisList {...item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch Sử</Text>
      {/* Flat List */}
      <FlatList
        ref={scrollRef}
        data={dataHistory}
        renderItem={render}
        keyExtractor={item => item._id}
        onEndReached={loadMoreHistory}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
      />
    </View>
  );
};

export default HisList;
