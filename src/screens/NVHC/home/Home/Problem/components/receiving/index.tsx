import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {images} from '../../../../../../../assets';
import ItemListReceiving from './ItemListReceiving';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {
  ReportActions,
  getIsLoadingPage,
  getListAccptReportAdm,
  getTotalAdmAccpt,
} from '../../../../../../../redux';
import {ReportType} from '../../../../../../../redux/types/report.type';

const Receiving: React.FC = () => {
  const dataListReport = useAppSelector(getListAccptReportAdm);
  const dipatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingPage);
  const totalPage = useAppSelector(getTotalAdmAccpt);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dipatch(
      ReportActions.getListAccptReportAdm({
        myHandle: 1,
        page: page,
        pageSize: 10,
      }),
    );
  }, [page]);
  const loadMoreReport = () => {
    if (totalPage && page < totalPage && !isLoading) {
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

  const render = ({item}: {item: ReportType}) => (
    <ItemListReceiving {...item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={dataListReport}
        renderItem={render}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreReport}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
      />
    </View>
  );
};

export default Receiving;
