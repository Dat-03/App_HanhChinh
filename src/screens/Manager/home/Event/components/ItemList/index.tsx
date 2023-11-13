import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../../../../assets';
import styles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface ListItem {
  id: string;
  image: any;
}
const ItemList: React.FC = () => {
  const renderItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={styles.viewImage}
      onPress={() => NavigationService.navigate(routes.DETAILEVENT)}>
      <Image style={styles.image} source={item.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
    />
  );
};

export default ItemList;
const data = [
  {id: '1', image: images.event},
  {id: '2', image: images.event},
  {id: '3', image: images.event},
  {id: '4', image: images.event},
];
