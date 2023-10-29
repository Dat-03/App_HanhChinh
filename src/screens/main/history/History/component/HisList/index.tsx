import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ItemHisList from './itemHisList';

const HisList: React.FC = () => {
  const styles = useStyles();
  const render = ({item}: {item: (typeof DATA)[0]}) => (
    <ItemHisList {...item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch Sử</Text>
      {/* Flat List */}
      <FlatList
        data={DATA}
        renderItem={render}
        keyExtractor={item => item.id}
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
