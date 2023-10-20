import {View, Text} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../../../components/customs/Button';

const ItemTechnicalRoom: React.FC = () => {
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
      />
      <ButtonCustom
        textButton="Nguyễn Văn B"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="blue"
        iconRight
      />
      <ButtonCustom
        textButton="Nguyễn Văn C"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="green"
        iconRight
      />
    </View>
  );
};

export default ItemTechnicalRoom;
