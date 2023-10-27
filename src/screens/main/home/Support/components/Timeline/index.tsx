import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import colors from '../../../../../../assets/colors';
import styles from './styles';

const Timelineitem: React.FC<{onStatusChange: (newStatus: string) => void}> = ({
  onStatusChange,
}) => {
  const customData = [
    {
      title: 'Yêu cầu',
      description: '09:10',
      status: 'history',
    },
    {
      title: 'Yêu cầu đã được tiếp nhận',
      description: '09:00',
      status: 'check',
    },
    {
      title: 'Yêu cầu đã hoàn thành',
      description: '09:00',
      status: 'history',
    },
  ];

  const [timelineData, setTimelineData] = useState(customData);
  useEffect(() => {
    const updatedData = timelineData.map(item => {
      if (item.description === '') {
        item.status = 'history';
      } else {
        item.status = 'check';
      }
      return item;
    });
    const currentStatus = 'Yêu cầu đã hoàn thành';
    setTimelineData(updatedData);
    onStatusChange(currentStatus);
  }, []);

  return (
    <Timeline
      data={timelineData}
      circleSize={200}
      separator={true}
      circleColor={colors.colorMain}
      lineColor={colors.line}
      lineWidth={3}
      renderCircle={rowData => (
        <View style={styles.circleContainer}>
          <View
            style={[
              styles.circleStyle,
              {
                backgroundColor:
                  rowData.status === 'check' ? colors.colorMain : 'gray',
              },
            ]}>
            {rowData.status === 'check' ? (
              <Icon name="check" type="font-awesome" color={'white'} />
            ) : (
              <Icon name="history" type="font-awesome" color={'white'} />
            )}
          </View>
        </View>
      )}
      descriptionStyle={styles.descriptionStyle}
      renderFullLine
      innerCircle="icon"
      titleStyle={styles.titleStyle}
    />
  );
};

export default Timelineitem;
