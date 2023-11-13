import React from 'react';
import {View, FlatList} from 'react-native';
import {ButtonSimple} from '../../../../../../components';
import styles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';


interface ButtonData {
  textButton: string;
  name: string;
  type: string;
  size: number;
  color: string;
  
}

const data: ButtonData[] = [
  {
    textButton: 'Mạng',
    name: 'wifi',
    type: 'font-awesome-5',
    size: 20,
    color: '#ec449c',
  },
  {
    textButton: 'Phòng học',
    name: 'google-classroom',
    type: 'material-community',
    size: 27,
    color: '#ec449c',
  },
  {
    textButton: 'Máy tính',
    name: 'computer',
    type: 'material',
    size: 28,
    color: '#ec449c',
    
  },
  {
    textButton: 'Hành chính',
    name: 'user-cog',
    type: 'font-awesome-5',
    size: 20,
    color: '#ec449c',
  },
  {
    textButton: 'Khác',
    name: 'ellipsis1',
    type: 'antdesign',
    size: 40,
    color: '#ec449c',
  },
];

const ItemButton: React.FC = () => {
  const renderItem = ({item}: {item: ButtonData}) => (
    <ButtonSimple
      textButton={item.textButton}
      name={item.name}
      type={item.type}
      size={item.size}
      color={item.color}
      style={styles.buttonStyle}
      onPressButton={()=>NavigationService.navigate(routes.COMPUTERERROR)}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_item, index) => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.listStyle}
    />
  );
};

export default ItemButton;
