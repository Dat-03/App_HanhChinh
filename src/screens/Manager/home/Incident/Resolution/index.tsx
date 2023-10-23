import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {ListButton} from './components';

const Resolution: React.FC = () => {
  return (
    <View>
      <View style={{padding: 10}}>
        <ListButton />
      </View>
    </View>
  );
};

export default Resolution;
