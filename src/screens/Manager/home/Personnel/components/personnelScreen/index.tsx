import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ButtonCustom from '../../../../../../components/customs/Button';
import {ItemTechnicalRoom} from './components';

const PersonnelScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.textNameRoom}>Phòng kỹ thuật</Text>
      <View style={{paddingHorizontal: 24}}>
        <ItemTechnicalRoom />
      </View>
      <Text style={styles.textNameRoom}>Phòng hành chính</Text>
      <View style={{paddingHorizontal: 24}}>
        <ItemTechnicalRoom />
      </View>
    </View>
  );
};

export default PersonnelScreen;
