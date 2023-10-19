import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ButtonNotification from '../../../../../components/customs/ButtonNotification';
import {ItemButton} from './components';

const Acceptance: React.FC = () => {
  const styles = useStyles();
  return (
    <View>
      <View style={{padding: 10}}>
        <ItemButton />
      </View>
    </View>
  );
};

export default Acceptance;
