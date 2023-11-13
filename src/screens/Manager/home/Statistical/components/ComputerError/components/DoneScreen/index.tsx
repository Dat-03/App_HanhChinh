import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../../../hooks';
import styles from './styles'
import {
  ReportActions,
  getListReportAdm,
  getTotalAdmCreact,
} from '../../../../../../../../redux';
import {ReportType} from '../../../../../../../../redux/types/report.type';
import { FlatList } from 'react-native';
import ItemDone from './item';

const DoneScreen:React.FC = () => {
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
    if (totalPage && page < totalPage) {
      setPage(page + 1);
    }
  };
  const dataListReport = useAppSelector(getListReportAdm);

  const render = ({item}: {item: (typeof DATA)[0]}) => <ItemDone {...item} />;
  return (
    <View style={styles.container}>
       <FlatList
        data={DATA}
        renderItem={render}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreReport}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

export default DoneScreen
const DATA=[
  {id:'1',nameProblem:'Khai báo MAC',nameRequire:'Nguyễn Trung Hải',nameAccept:'Nguyễn Trung Hải',room:'T1101',status:'Đúng giờ'},


]