import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {images} from '../../../../../../../assets';
import ItemListReceiving from './ItemListReceiving';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {ReportActions, getListReportAdm} from '../../../../../../../redux';
import {ReportType} from '../../../../../../../redux/types/report.type';

const Receiving: React.FC = () => {
  const dipatch = useAppDispatch();

  // useEffect(() => {
  //   dipatch(
  //     ReportActions.getListReportAdm({
  //       myHandle: 1,
  //       page: 1,
  //       pageSize: 20,
  //     }),
  //   );
  // }, []);

  const dataListReport = useAppSelector(getListReportAdm);
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
      />
    </View>
  );
};

export default Receiving;
const DATA = [
  {
    id: '1',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '2',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '3',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '4',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '5',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '6',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '7',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
];
