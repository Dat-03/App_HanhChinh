import {View, Text} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../components/customs/Button';
import useStyles from './styles';

const ButtonContent: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.content}>
      <ButtonCustom
        textButton="Nhân sự"
        name="users"
        type="font-awesome"
        color="#ec449c"
        size={25}
      />
      <ButtonCustom
        textButton="Thống kê sự cố trong ngày"
        name="areachart"
        type="antdesign"
        color="#ec449c"
        size={25}
      />
      <ButtonCustom
        textButton="Sự cố chưa hoàn thành"
        name="history"
        type="font-awesome"
        color="#ec449c"
        size={25}
      />
      <ButtonCustom
        textButton="Thành tích cán bộ"
        name="emoji-events"
        type="material"
        color="#ec449c"
        size={25}
      />
      <ButtonCustom
        textButton="Sự kiện bộ môn"
        name="event-note"
        type="material"
        color="#ec449c"
        size={25}
      />
      <ButtonCustom
        textButton="Tính sẵn sàng phòng"
        name="room"
        type="fontisto"
        color="#ec449c"
        size={25}
      />
    </View>
  );
};

export default ButtonContent;
