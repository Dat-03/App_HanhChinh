import {View, Text, Image, Touchable} from 'react-native';
import React, {useEffect} from 'react';
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
import {ListReportAdmType} from '../../../../../../../redux/types/report.type';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {ReportActions, getDetail} from '../../../../../../../redux';
interface RouteParamsIdReport {
  _id: string;
}

const DetailProblem: React.FC = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const _idReport = (route.params as RouteParamsIdReport)._id;
  useEffect(() => {
    dispatch(ReportActions.getDetailReport(_idReport));
  }, []);
  const dataDetail = useAppSelector(getDetail);

  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const handlePressGoDone = () => {
    if (dataDetail?._id) {
      dispatch(ReportActions.getDetailAccept(dataDetail?._id));
      NavigationService.navigate(routes.DONEPROBLEM, {_id: dataDetail._id});
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoback}>
          <Icon name="chevron-left" type="feather" />
        </TouchableOpacity>
        <Text style={styles.title}>{dataDetail?.type.name}</Text>
        <Text style={styles.can}>.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Tên người yêu cầu:</Text>
        <View style={styles.info}>
          <Image source={images.avatar} style={styles.avatar} />
          <View style={{marginEnd: 120}}>
            <Text style={styles.name}>{dataDetail?.user_create.name}</Text>
            <Text style={styles.infomation1}>
              {dataDetail?.user_create.phone}
            </Text>
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
          <Text style={styles.infomation}>{dataDetail?.createdAt}</Text>
        </View>
        <View style={styles.itemChild}>
          <Text style={styles.text}>Phòng:</Text>
          <Text style={styles.infomation}>{dataDetail?.room.name}</Text>
        </View>
        <View style={styles.itemLastChild}>
          <Text style={styles.text}>Mô tả sự cố:</Text>
          <Text style={styles.infomation}>{dataDetail?.description}</Text>
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
