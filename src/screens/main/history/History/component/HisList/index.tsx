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
import {HistoryReportType, ReportType} from '../../../../../../redux/types/report.type';

const HisList: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(ReportActions.getListHistoryTeacher(1));
  }, []);

  const dataHistory = useAppSelector(getHistoryReportTeacher);
  console.log('data===>', dataHistory);

  const styles = useStyles();
  const render = ({item}: {item: ReportType}) => (
    <ItemHisList {...item} />
  );

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

const DATA = [
  {
    id: '1',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '2',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '3',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '4',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '5',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '6',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '7',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '8',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '9',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '10',
    problemFrom: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
];
