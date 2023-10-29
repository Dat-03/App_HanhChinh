import {View, Text, Image, Touchable} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  BigButton,
  Button,
  ButtonSimple,
  HeaderCustom,
} from '../../../../../../../components';
import {NavigationService} from '../../../../../../../navigation';
import {images} from '../../../../../../../assets';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {routes} from '../../../../../../../constants';
import colors from '../../../../../../../assets/colors';

const DetailProblem: React.FC = () => {
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const handlePressGoDone = () => {
    NavigationService.navigate(routes.DONEPROBLEM);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoback}>
          <Icon name="chevron-left" type="feather" />
        </TouchableOpacity>
        <Text style={styles.title}>Sự cố về cơ sở vật chất</Text>
        <Text style={styles.can}>.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Tên người yêu cầu:</Text>
        <View style={styles.info}>
          <Image source={images.avatar} style={styles.avatar} />
          <View style={{marginEnd: 120}}>
            <Text style={styles.name}>Lê Văn Hiếu</Text>
            <Text style={styles.infomation1}>0797151033</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.call}>
              <Icon
                name="phone"
                type="font-awesome"
                color={colors.btnPhoneCall}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemChild}>
          <Text style={styles.text}>Thời gian:</Text>
          <Text style={styles.infomation}> 09:05 am</Text>
        </View>
        <View style={styles.itemChild}>
          <Text style={styles.text}>Phòng:</Text>
          <Text style={styles.infomation}> T1101</Text>
        </View>
        <View style={styles.itemLastChild}>
          <Text style={styles.text}>Mô tả sự cố:</Text>
          <Text style={styles.infomation}>
            Bóng đèn cháy, lỗi ti vi, lỗi điều hòa
          </Text>
        </View>
      </View>
      <BigButton
        onPressButton={handlePressGoDone}
        textButton="Tiếp nhận"
        style={styles.btn}
      />
    </View>
  );
};

export default DetailProblem;
