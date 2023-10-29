import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonNotification from '../../../../../components/customs/ButtonRoom';
import {ItemButton} from './components';

const Acceptance: React.FC = () => {
  return (
    <View>
      <View style={{padding: 10}}>
        <ItemButton />
      </View>
    </View>
  );
};

export default Acceptance;
