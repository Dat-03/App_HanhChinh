import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import colors from '../../../../../../assets/colors';
import styles from './styles';

const Timelineitem: React.FC = () => {
  const customData = [
    {
      title: 'Yêu cầu',
      description: '__:__',
      status: 'history',
    },
    {
      title: 'Yêu cầu đã được tiếp nhận',
      description: '09:00',
      status: 'check',
    },
    {
      title: 'Yêu cầu đã hoàn thành',
      description: '10:00',
      status: 'check',
    },
  ];
  const [timelineData, setTimelineData] = useState(customData);
  useEffect(() => {
    const updatedData = timelineData.map(item => {
      if (item.description === '__:__') {
        item.status = 'history';
      } else {
        item.status = 'check';
      }
      return item;
    });
    setTimelineData(updatedData);
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

const localStyles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circleStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Timelineitem;
