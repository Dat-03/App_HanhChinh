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
        textButton="Báo cáo sự cố"
        name="users"
        type="font-awesome"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.PERSONNEL)}
      />
      <ButtonCustom
        textButton="Yêu cầu hỗ trợ CNTT"
        name="areachart"
        type="antdesign"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.STATISTICAL)}
      />
      <ButtonCustom
        textButton="Quản lý mượn phòng học, hội trường"
        name="history"
        type="font-awesome"
        color="#ec449c"
        size={25}
        onPressButton={() => NavigationService.navigate(routes.SUPPORT)}
      />
    </ScrollView>
  );
};

export default ButtonContent;
