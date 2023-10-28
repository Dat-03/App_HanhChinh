import React from 'react';
import { Text, View } from 'react-native';
import { ItemTechnicalRoom } from './components';
import styles from './styles';

const PersonnelScreen: React.FC = () => {
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
