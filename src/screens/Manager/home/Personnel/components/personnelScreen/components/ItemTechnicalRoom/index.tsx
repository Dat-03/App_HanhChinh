import {View, Text} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../../../components/customs/Button';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';

const ItemTechnicalRoom: React.FC = () => {
  const handlePressGoDetail = () => {
    NavigationService.navigate(routes.DETAILPERSONAL);
  };
  return (
    <View>
      <ButtonCustom
        textButton="Nguyễn Văn A"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="red"
        iconRight
        onPressButton={handlePressGoDetail}
      />
      <ButtonCustom
        textButton="Nguyễn Văn B"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="blue"
        iconRight
        onPressButton={handlePressGoDetail}
      />
      <ButtonCustom
        textButton="Nguyễn Văn C"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="green"
        iconRight
        onPressButton={handlePressGoDetail}
      />
    </View>
  );
};

export default ItemTechnicalRoom;
