import {View, Text} from 'react-native';
import React from 'react';
import {ButtonNotification} from '../../../../../../../components';
import useStyles from './styles';

const ListButton: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ButtonNotification
        typeError="Khai báo MAC"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn A"
        reciever="Người tiếp nhận: Nguyễn văn B"
        deadline="Đúng giờ"
      />
      <ButtonNotification
        typeError="Khai báo MAC"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn C"
        reciever="Người tiếp nhận: Nguyễn văn D"
        deadline="Trễ giờ"
      />
      <ButtonNotification
        typeError="Khai báo MAC"
        room="td1234"
        requeste="Người yêu cầu: Nguyễn văn E"
        reciever="Người tiếp nhận: Nguyễn văn G"
        deadline="Đúng giờ"
      />
    </View>
  );
};

export default ListButton;
