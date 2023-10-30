import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {HeaderCustom, TabViewItem} from '../../../../../components';
import styles from './styles';
import CurrentProblem from './components/curentProblem';
import Receiving from './components/receiving';
import {NavigationService} from '../../../../../navigation';
import {useAppDispatch} from '../../../../../hooks';
import {ReportActions} from '../../../../../redux';

const Problem: React.FC = () => {
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'chevron-left', type: 'feather', color: 'white'}}
        rightIcon={{name: 'bell', type: 'fontisto', color: 'white'}}
        onPressLeftIcon={handlePressGoback}
      />
      <View style={styles.content}>
        <TabViewItem
          tabStyle={styles.tabStyle}
          title1={'Sự cố hiện có'}
          title2={'Đang tiếp nhận'}
          screen1={<CurrentProblem />}
          screen2={<Receiving />}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
};

export default Problem;
