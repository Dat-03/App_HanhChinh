import {View} from 'react-native';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {Button} from '../../../../components';

const HomeManage: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
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
