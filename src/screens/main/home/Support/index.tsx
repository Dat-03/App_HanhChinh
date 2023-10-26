import React from 'react';
import {Text, View} from 'react-native';
import {Notification_Suport, Timelineitem} from './components';
import styles from './styles';
import {BigButton, HeaderCustom} from '../../../../components';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';

const Support: React.FC = () => {
  const handleGoback = () => {
    NavigationService.goBack();
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
        <Timelineitem />
      </View>
      <View>
        <BigButton textButton="Phản hồi" />
      </View>
    </View>
  );
};

export default Support;
