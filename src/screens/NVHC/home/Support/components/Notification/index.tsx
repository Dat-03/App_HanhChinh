import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../../../../../assets';
import {useAppSelector} from '../../../../../../hooks';
import {
  getDataReportTeacher,
  getDetail,
  getImageUser,
} from '../../../../../../redux';

const Notification_Suport: React.FC = () => {
  const data = useAppSelector(getDetail);
  const imageUser = useAppSelector(getImageUser);

  return data && data.user_handle ? (
    <View style={styles.viewbig}>
      <View>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>{data?.type.name}</Text>
        </View>
        <Text style={styles.textContent}>
          Người tiếp nhận: {data?.user_handle.name}
        </Text>
        <View style={styles.viewDate}>
          <Text style={styles.textContent}>{data?.accept_report}</Text>
          <Text style={styles.textContent}>Phòng: {data?.room.name}</Text>
        </View>
      </View>

      <Image style={styles.avatar} source={{uri: imageUser}} />
    </View>
  ) : (
    <View style={{height: 50}}></View>
  );
};

export default Notification_Suport;
