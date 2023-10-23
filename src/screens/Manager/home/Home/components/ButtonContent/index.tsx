import {View, ScrollView} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../components/customs/Button';
import styles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const ButtonContent: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <ButtonCustom
        textButton="Nhân sự"
        textTitle="asdasdasdasd"
        name="users"
        type="font-awesome"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.PERSONNEL)}
      />
      <ButtonCustom
        textButton="Thống kê sự cố trong ngày"
        name="areachart"
        type="antdesign"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.STATISTICAL)}
      />
      <ButtonCustom
        textButton="Sự cố chưa hoàn thành"
        name="history"
        type="font-awesome"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.INCIDENT)}
      />
      <ButtonCustom
        textButton="Thành tích cán bộ"
        name="emoji-events"
        type="material"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.ACHIEVEMENT)}
      />
      <ButtonCustom
        textButton="Sự kiện bộ môn"
        name="event-note"
        type="material"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.EVENT)}
      />
      <ButtonCustom
        textButton="Tính sẵn sàng phòng"
        name="room"
        type="fontisto"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.ROOMCHECKING)}
      />
    </ScrollView>
  );
};

export default ButtonContent;
