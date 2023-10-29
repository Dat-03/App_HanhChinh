import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {normalize} from 'path';
import {images} from '../../../../../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../../../navigation';
import DetailProblem from '../detailProblem';
import {routes} from '../../../../../../../constants';
import ItemListProblem from './ItemListProblem';
import {useAppSelector} from '../../../../../../../hooks';
import {getListReportAdm} from '../../../../../../../redux';
import {
  ListReportAdmType,
  ReportType,
} from '../../../../../../../redux/types/report.type';

const CurrentProblem: React.FC = () => {
  const dataListReport = useAppSelector(getListReportAdm);

  console.log('datamain+==========>', dataListReport);

  const render = ({item}: {item: ReportType}) => <ItemListProblem {...item} />;

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

export default CurrentProblem;
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
  {
    id: '8',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '9',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
  {
    id: '10',
    problem: 'Sự cố máy chiếu hỏng',
    name: 'Lê Văn Hiếu',
    building: 'T',
    room: '1101',
    time: '09h45',
    date: '17/02/2023',
  },
];
