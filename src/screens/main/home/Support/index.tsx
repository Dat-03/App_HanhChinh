import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Notification_Suport, Timelineitem} from './components';
import styles from './styles';
import {BigButton, HeaderCustom} from '../../../../components';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';

const Support: React.FC = () => {
  const handleGoback = () => {
    NavigationService.goBack();
  };

  const [timelineStatus, setTimelineStatus] = useState('Yêu cầu');
  const [feedbackText, setFeedbackText] = useState('Phản hồi');

  const handleFeedback = () => {
    if (feedbackText === 'Phản hồi') {
      if (timelineStatus === 'Yêu cầu đã hoàn thành') {
      } else {
      }
    } else if (feedbackText === 'Đánh giá') {
    }
  };

  const handleReview = () => {
    Alert.alert('Thông báo', 'Đã hoàn thành');
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
        <Timelineitem
          onStatusChange={newStatus => {
            setTimelineStatus(newStatus);
            // Check if all three requests have timestamps
            if (newStatus === 'Yêu cầu đã hoàn thành') {
              setFeedbackText('Đánh giá');
            }
          }}
        />
      </View>
      <View>
        {timelineStatus === 'Yêu cầu đã hoàn thành' ? (
          <BigButton textButton="Đánh giá" onPressButton={handleReview} />
        ) : (
          <BigButton textButton={feedbackText} onPressButton={handleFeedback} />
        )}
      </View>
    </View>
  );
};

export default Support;
