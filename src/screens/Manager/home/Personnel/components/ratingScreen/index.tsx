import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import Switch_custom from '../../../../../../components/customs/Switch';

const RatingScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Switch_custom/>
    </View>
  );
};

export default RatingScreen;
