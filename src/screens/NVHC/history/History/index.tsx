import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ItemHisList from './itemHisList';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  LoadingActions,
  ReportActions,
  getHistoryAdm,
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

  useEffect(() => {
    if (isReset) {
      dispatch(ReportActions.getListHistoryAdm({pageSize: 10, page: 1}));
      dispatch(LoadingActions.hideReset());
      setPage(1);
    }
  }, [isReset]);

  useEffect(() => {
    dispatch(ReportActions.getListHistoryAdm({pageSize: 10, page: page}));
  }, [page]);

  const loadMoreHistory = () => {
    if (totalPage && page < totalPage) {
      console.log(totalPage);
      setPage(page + 1);
    }
  };

  const render = ({item}: {item: ReportType}) => <ItemHisList {...item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={render}
        keyExtractor={item => item._id}
        onEndReached={loadMoreHistory}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default HistoryNVHC;
