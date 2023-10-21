import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {HeaderCustom, TabViewItem} from '../../../../components';
import Acceptance from './Acceptance';
import Resolution from './Resolution';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Incident: FunctionComponent = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.HOMEMANAGER);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
        onPressLeftIcon={handlePressGoback}
        title="Lỗi máy tính"
        rightIcon={{name: 'bell', type: 'evilicon', color: 'white'}}
      />
      <View style={styles.content}>
        <TabViewItem
          tabStyle={styles.tabStyle}
          title1={'Acceptance'}
          title2={'Resolution'}
          screen1={<Acceptance />}
          screen2={<Resolution />}
          viewStyle={{height: 800}}
          titleStyle={styles.titleStyle}
        />
      </View>
    </View>
  );
};

export default Incident;
