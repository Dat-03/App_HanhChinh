import {Icon} from '@rneui/themed';
import React from 'react';
import {Alert, Text, View} from 'react-native';
import {BigButton} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {Notification_Suport} from './components';
import TimelineItem from './components/Timeline';
import styles from './styles';

const Support: React.FC = () => {
  const handleGoback = () => {
    NavigationService.goBack();
  };

  const handleReview = () => {
    Alert.alert('Thông báo', 'Vui lòng đánh giá');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="left" type="antdesign" size={24} onPress={handleGoback} />
        <Text style={styles.textHeader}>Yêu cầu hỗ trợ CNTT</Text>
      </View>
      <View style={styles.viewNotification}>
        <Notification_Suport />
      </View>
      <View style={styles.viewTimeline}>
        <Text style={styles.textTimeline}>Trạng thái yêu cầu</Text>
        <TimelineItem />
      </View>
      <View style={styles.button}>
        <BigButton textButton="Đánh giá" onPressButton={handleReview} />
      </View>
    </View>
  );
};

export default Support;
