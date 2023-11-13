import React, {FunctionComponent, useEffect} from 'react';

import {View, Text} from 'react-native';

import styles from './styles';
import HisList from './component/HisList';
import InfoHis from './component/InfoHis';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {LoadingActions, getIsReset} from '../../../../redux';
import {NavigationService} from '../../../../navigation';

const History: React.FC = () => {
  return (
    <View style={styles.container}>
      <InfoHis />
      <HisList />
    </View>
  );
};

export default History;
