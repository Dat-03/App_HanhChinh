import React from 'react';
import {View} from 'react-native';
import colors from '../../../../../../assets/colors';
import ButtonCustom from '../../../../../../components/customs/Button';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';

const ButtonContent: React.FC = () => {
  return (
    <View>
      <ButtonCustom
        textButton="Báo cáo sự cố"
        name="users"
        type="font-awesome"
        color="#ec449c"
        size={25}
        style={{backgroundColor: colors.buttonGray}}
        onPressButton={() => NavigationService.navigate(routes.CREATE_REPORT)}
      />
      <ButtonCustom
        textButton="Yêu cầu hỗ trợ CNTT"
        name="areachart"
        type="antdesign"
        color="#ec449c"
        size={25}
        style={{backgroundColor: colors.buttonGray}}
      />
      <ButtonCustom
        textButton="Quản lý mượn phòng học, hội trường"
        name="history"
        type="font-awesome"
        color="#ec449c"
        style={{backgroundColor: colors.buttonGray}}
        size={25}
      />
    </View>
  );
};

export default ButtonContent;
