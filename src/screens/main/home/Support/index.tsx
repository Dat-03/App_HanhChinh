import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Notification_Suport, Timelineitem} from './components';
import styles from './styles';
import {BigButton, HeaderCustom} from '../../../../components';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';
import TimelineItem from './components/Timeline';

const Support: React.FC = () => {
  const handleGoback = () => {
    NavigationService.goBack();
  };

  const [timelineStatus, setTimelineStatus] = useState('Yêu cầu');
  const [feedbackText, setFeedbackText] = useState('Phản hồi');

  const handleReview = () => {
    Alert.alert('Thông báo', 'Vui lòng đánh giá');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="left" type="antdesign" onPress={handleGoback} />
        <Text style={styles.textHeader}>Yêu cầu hỗ trợ CNTT</Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <Notification_Suport />
      </View>
      <View style={styles.viewTimeline}>
        <Text style={styles.textTimeline}>Trạng thái yêu cầu</Text>
          <TimelineItem/>
      </View>
      <View>
        <BigButton textButton="Đánh giá" onPressButton={handleReview} />
      </View>
    </View>
  );
};

export default Support;
