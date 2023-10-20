import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {HeaderCustom, TabViewItem} from '../../../../components';
import {PersonnelScreen, RatingScreen} from './components';

const Personnel: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Danh sách nhân sự"
        leftIcon={{name: 'left', type: 'antdesign'}}
      />
      <TabViewItem
        tabStyle={styles.tabStyle}
        title1={'Personnel'}
        title2={'Rating'}
        screen1={<PersonnelScreen />}
        screen2={<RatingScreen />}
        viewStyle={{height: 800}}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

export default Personnel;
