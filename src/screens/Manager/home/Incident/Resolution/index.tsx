import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import { ListButton } from './components';

const Resolution: React.FC = () => {
  const styles = useStyles();
  return (
    <View>
      <View style={{padding: 10}}>
        <ListButton />
      </View>
    </View>
  );
};

export default Resolution;
