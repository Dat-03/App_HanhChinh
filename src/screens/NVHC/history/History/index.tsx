import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles';
import ItemHisList from './itemHisList';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  LoadingActions,
  ReportActions,
  getHistoryAdm,
  getIsLoadingPage,
  getIsReset,
  getTotalPageHistory,
} from '../../../../redux';
import {ReportType} from '../../../../redux/types/report.type';

const HistoryNVHC: React.FC = () => {
  const data = useAppSelector(getHistoryAdm);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const totalPage = useAppSelector(getTotalPageHistory);
  const isReset = useAppSelector(getIsReset);
  const isLoading = useAppSelector(getIsLoadingPage);

  const scrollRef = useRef<FlatList | null>(null);
  useEffect(() => {
    if (isReset) {
      scrollRef?.current?.scrollToOffset({offset: 0, animated: true});
      dispatch(ReportActions.getListHistoryAdm({pageSize: 10, page: 1}));
      dispatch(LoadingActions.hideReset());
      setPage(1);
    }
  }, [isReset]);

  useEffect(() => {
    dispatch(ReportActions.getListHistoryAdm({pageSize: 10, page: page}));
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
      <FlatList
        ref={scrollRef}
        data={data}
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

export default HistoryNVHC;
