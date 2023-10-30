import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../components/customs/Button';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import styles from './styles';
import {images} from '../../../../../../assets';
import {Icon} from '@rneui/themed';

interface ContactItem {
  id: number;
  name: string;
  role: string;
}

const data: ContactItem[] = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'Trưởng phòng IT',
  },
  {
    id: 2,
    name: 'Nguyễn Văn B',
    role: 'Nhân viên IT',
  },
  {
    id: 3,
    name: 'Nguyễn Văn C',
    role: 'Quản lý IT',
  },
];

const ItemSeparator = () => (
  <View style={{height: 8, backgroundColor: 'transparent'}} />
);

const ItemContact: React.FC = () => {
  const handlePressGoDetail = () => {
    NavigationService.navigate(routes.DETAILCONTACT);
  };

  const renderItem = ({item}: {item: ContactItem}) => (
    <TouchableOpacity style={styles.button} onPress={handlePressGoDetail}>
      <View style={styles.header}>
        <View style={styles.content}>
          <Image style={styles.image} source={images.avatar} />
          <View>
            <Text style={styles.nameUser}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        </View>
        <Icon name="right" type="antdesign" style={styles.rightIcon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default ItemContact;
