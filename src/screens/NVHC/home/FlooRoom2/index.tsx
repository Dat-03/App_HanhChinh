import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, normalize } from '@rneui/themed';
import { NavigationService } from '../../../../navigation';
import Room from './component/Room';
import { BigButton } from '../../../../components';
import styles from './styles';

const FloorRoom2: React.FC = () => {
  const handlenPressGoback = () => {
    NavigationService.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='chevron-left' type='font-awesome' onPress={handlenPressGoback} />
        <Text style={styles.text}>Tầng 2</Text>
        <Icon name='notifications-outline' type='ionicon' />
      </View>
        <Room />
        <BigButton textButton='Hoàn thành' style={{marginStart:10}}/>
    </View>
  )
}

export default FloorRoom2

