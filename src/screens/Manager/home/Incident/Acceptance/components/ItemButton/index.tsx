import {View, Text} from 'react-native';
import React from 'react';
import {ButtonNotification} from '../../../../../../../components';
import styles from './styles';

const ItemButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <ButtonNotification
        typeError="Lỗi máy tính"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn A"
        reciever="Người tiếp nhận: Nguyễn văn A"
        deadline="Đúng giờ"
      />
      <ButtonNotification
        typeError="Lỗi máy tính"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn B"
        reciever="Người tiếp nhận: Nguyễn văn B"
        deadline="Trễ giờ"
      />
      <ButtonNotification
        typeError="Lỗi máy tính"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn C"
        reciever="Người tiếp nhận: Nguyễn văn C"
        deadline="Đúng giờ"
      />
      <ButtonNotification
        typeError="Lỗi máy tính"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn D"
        reciever="Người tiếp nhận: Nguyễn văn D"
        deadline="Trễ giờ"
      />
    </View>
  );
};

export default ItemButton;
