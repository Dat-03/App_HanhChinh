import {View} from 'react-native';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {Button} from '../../../../components';
import HeaderCustom from '../../../../components/customs/Header';

const HomeManage: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Home screen"
        leftIcon={{name: 'book', type: 'font-awesome'}}
        rightIcon={{name: 'book', type: 'font-awesome'}}
      />
      <Button
        textButton="hihi"
        name="book"
        type="font-awesome"
        size={24}
        color="red"
      />
    </View>
  );
};

export default HomeManage;
