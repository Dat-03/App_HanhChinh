import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {ButtonSimple, HeaderCustom} from '../../../../components';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {ItemButton} from './components';

const Statistical: FunctionComponent = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.HOMEMANAGER);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'user-circle', type: 'font-awesome', color: 'white'}}
        title="Nguyễn Văn A"
        rightIcon={{name: 'bell', type: 'font-awesome-5', color: 'white'}}
      />
      <View style={styles.content}>
        <View style={styles.viewHeadercontent}>
          <Icon name="left" type="antdesign" onPress={handlePressGoback} />
          <Text style={styles.text}>Sự cố trong ngày</Text>
        </View>
        <View style={{paddingHorizontal: 2}}>
          <Text style={styles.textName}>Chung</Text>
          <ItemButton />
        </View>
        <Text style={styles.textName}>Công nghệ thông tin</Text>
      </View>
    </View>
  );
};

export default Statistical;
