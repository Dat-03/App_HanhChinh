import {View, Text} from 'react-native';
import React from 'react';
import ButtonCustom from '../../../../../../components/customs/Button';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const ItemContact: React.FC = () => {
  const handlePressGoDetail = () => {
    NavigationService.navigate(routes.DETAILCONTACT);
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
        isTitle
        style={{backgroundColor: '#f1f4f5'}}
      />
      <ButtonCustom
        textButton="Nguyễn Văn B"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="blue"
        iconRight
        isTitle
        onPressButton={handlePressGoDetail}
        style={{backgroundColor: '#f1f4f5'}}
      />
      <ButtonCustom
        textButton="Nguyễn Văn C"
        textTitle="Trưởng phòng IT"
        name="book"
        type="font-awesome"
        size={30}
        color="green"
        iconRight
        isTitle
        onPressButton={handlePressGoDetail}
        style={{backgroundColor: '#f1f4f5'}}
      />
    </View>
  );
};

export default ItemContact;
