import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {images} from '../../../../../../assets';
import styles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface ListItem {
  id: string;
  date: string;
  title: string;
  image: any;
}

const ItemList2: React.FC = () => {
  const renderItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => NavigationService.navigate(routes.DETAILEVENT)}>
      <View style={styles.viewAll}>
        <View>
          <View style={styles.viewText1}>
            <Icon name="star" type="ionicon" color={'#FFE144'} />
            <Text style={styles.text1}>{item.date}</Text>
          </View>
          <Text style={styles.text2}>{item.title}</Text>
        </View>
        <View style={styles.image}>
          <Image source={item.image} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList2;

const data: ListItem[] = [
  {
    id: '1',
    date: '1/3/2023',
    title: 'LỄ TÔN VINH SINH VIÊN TIÊU BIỂU- GODEN BEE AWARDS SUMMER 2022',
    image: images.event2,
  },
  {
    id: '2',
    date: '1/3/2023',
    title: 'LỄ TÔN VINH SINH VIÊN TIÊU BIỂU- GODEN BEE AWARDS SUMMER 2022',
    image: images.event2,
  },
  {
    id: '3',
    date: '1/3/2023',
    title: 'LỄ TÔN VINH SINH VIÊN TIÊU BIỂU- GODEN BEE AWARDS SUMMER 2022',
    image: images.event2,
  },
];
