import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useAppSelector} from '../../../../../../hooks';
import {getDataReportTeacher, getDetail} from '../../../../../../redux';

const TimelineItem: React.FC = () => {
  const data = useAppSelector(getDetail);
  console.log('timeline', data);

  return (
    <View style={styles.container}>
      <View style={styles.createdAt}>
        <View style={styles.viewRow1}>
          <View style={data?.createdAt ? styles.circle : styles.circle2}>
            <Icon
              name={data?.createdAt ? 'check' : 'history'}
              type="material"
              color={data?.createdAt ? 'white' : '#2D5381'}
              size={24}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.status}>Yêu cầu</Text>
            <Text style={styles.createAt}>
              {data?.createdAt ? data.createdAt : '__:__'}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.accept_report}>
        <View style={styles.viewRow1}>
          <View style={data?.accept_report ? styles.circle : styles.circle2}>
            <Icon
              name={data?.accept_report ? 'check' : 'history'}
              type="material"
              color={data?.accept_report ? 'white' : '#2D5381'}
              size={24}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.status}>Yêu cầu đã được tiếp nhận</Text>
            <Text style={styles.createAt}>
              {data?.accept_report ? data?.accept_report : '__:__'}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.done_report}>
        <View style={styles.viewRow1}>
          <View
            style={
              data?.done_report && data.status == -1
                ? styles.circle3
                : data?.done_report
                ? styles.circle
                : styles.circle2
            }>
            <Icon
              name={
                data?.done_report && data.status == -1
                  ? 'close'
                  : data?.done_report
                  ? 'check'
                  : 'history'
              }
              type="material"
              color={data?.done_report ? 'white' : '#2D5381'}
              size={24}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.status}>
              {data?.status == -1
                ? 'Yêu cầu không hoàn thành'
                : 'Yêu cầu đã hoàn thành'}
            </Text>
            <Text style={styles.createAt}>
              {data?.done_report ? data?.done_report : '__:__'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimelineItem;
