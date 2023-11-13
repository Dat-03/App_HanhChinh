import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useAppDispatch, useAppSelector } from '../../../../../../../../hooks';
import {
  ReportActions,
  getListReportAdm,
  getTotalAdmCreact,
} from '../../../../../../../../redux';
import {ReportType} from '../../../../../../../../redux/types/report.type';
import ItemProblem from './itemProblem';

const ProblemScreen:React.FC = () => {
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

  const render = ({item}: {item: (typeof DATA)[0]}) => <ItemProblem {...item} />;
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

export default ProblemScreen
const DATA=[
  {id:'1',nameProblem:'Lỗi máy tính',nameRequire:'Nguyễn Trung Hải',nameAccept:'Nguyễn Trung Hải',room:'T1101',status:'Đúng giờ'},
  {id:'2',nameProblem:'Lỗi máy tính',nameRequire:'Nguyễn Trung Hải',nameAccept:'Nguyễn Trung Hải',room:'T1101',status:'Đúng giờ'},
  {id:'3',nameProblem:'Lỗi máy tính',nameRequire:'Nguyễn Trung Hải',nameAccept:'Nguyễn Trung Hải',room:'T1101',status:'Đúng giờ'},
  {id:'4',nameProblem:'Lỗi máy tính',nameRequire:'Nguyễn Trung Hải',nameAccept:'Nguyễn Trung Hải',room:'T1101',status:'Đúng giờ'}

]