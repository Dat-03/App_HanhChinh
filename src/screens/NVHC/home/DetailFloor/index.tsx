import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './style';
import { Icon } from '@rneui/themed';
import { NavigationService } from '../../../../navigation';
import Button from '../../../NVHC/home/DetailFloor/Components/Button';

const DetailFloor: React.FC = () => {
    const styles = useStyles();
    const handlenPressGoback =() => {
        NavigationService.goBack();
    }
  return (
    <View>
      <View style={styles.header}>
        <Icon name='chevron-left' type='font-awesome' onPress={handlenPressGoback}/>
        <Text style={styles.text}>Tầng 1</Text>
        <Icon name='notifications-outline' type='ionicon' />
      </View>
      <Button/>
    </View>
  )
}

export default DetailFloor

const styles = StyleSheet.create({})