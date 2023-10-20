import {View} from 'react-native';

import React, {FunctionComponent} from 'react';

import {HeaderCustom, TabViewItem} from '../../../../components';
import {PersonnelScreen, RatingScreen} from './components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Personnel: FunctionComponent = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.HOMEMANAGER);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Danh sách nhân sự"
        leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
        onPressLeftIcon={handlePressGoback}
      />
      <View style={styles.content}>
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
    </View>
  );
};

export default Personnel;
