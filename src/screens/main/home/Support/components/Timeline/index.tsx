import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const TimelineItem: React.FC = () => {
  const DATA = {
    createdAt: '',
    accept_report: '',
    done_report: '',
    status: -1,
  };
  return (
    <View style={styles.container}>
      <View style={styles.createdAt}>
        <View style={styles.viewRow1}>
          <View style={DATA.createdAt ? styles.circle : styles.circle2}>
            <Icon
              name={DATA.createdAt ? 'check' : 'history'}
              type="material"
              color={DATA.createdAt ? 'white' : '#2D5381'}
              size={24}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.status}>Yêu cầu</Text>
            <Text style={styles.createAt}>
              {DATA.createdAt ? DATA.createdAt : '__:__'}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.accept_report}>
        <View style={styles.viewRow1}>
          <View style={DATA.accept_report ? styles.circle : styles.circle2}>
            <Icon
              name={DATA.accept_report ? 'check' : 'history'}
              type="material"
              color={DATA.accept_report ? 'white' : '#2D5381'}
              size={24}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.status}>Yêu cầu đã được tiếp nhận</Text>
            <Text style={styles.createAt}>
              {DATA.accept_report ? DATA.accept_report : '__:__'}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.done_report}>
        <View style={styles.viewRow1}>
          <View
            style={
              DATA.done_report && DATA.status == -1
                ? styles.circle3
                : DATA.done_report
                ? styles.circle
                : styles.circle2
            }>
            <Icon
              name={
                DATA.done_report && DATA.status == -1
                  ? 'close'
                  : DATA.done_report
                  ? 'check'
                  : 'history'
              }
              type="material"
              color={DATA.done_report ? 'white' : '#2D5381'}
              size={24}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.status}>
              {DATA.status == -1
                ? 'Yêu cầu không hoàn thành'
                : 'Yêu cầu đã hoàn thành'}
            </Text>
            <Text style={styles.createAt}>
              {DATA.done_report ? DATA.done_report : '__:__'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimelineItem;
