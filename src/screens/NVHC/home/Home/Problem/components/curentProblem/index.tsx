import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {normalize} from 'path';
import {images} from '../../../../../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../../../navigation';
import DetailProblem from '../detailProblem';
import {routes} from '../../../../../../../constants';
import ItemListProblem from './ItemListProblem';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {
  ReportActions,
  getIsLoadingPage,
  getListReportAdm,
  getTotalAdmCreact,
} from '../../../../../../../redux';
import {ReportType} from '../../../../../../../redux/types/report.type';

const CurrentProblem: React.FC = () => {
  const dataListReport = useAppSelector(getListReportAdm);
  const isLoading = useAppSelector(getIsLoadingPage);
  const totalPage = useAppSelector(getTotalAdmCreact);
  const [page, setPage] = useState(1);
  const dipatch = useAppDispatch();
  useEffect(() => {
    dipatch(
      ReportActions.getListReportAdm({
        myHandle: 0,
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

  const render = ({item}: {item: ReportType}) => <ItemListProblem {...item} />;

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

export default CurrentProblem;
