import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';

const HistoryManager: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};

export default HistoryManager;
