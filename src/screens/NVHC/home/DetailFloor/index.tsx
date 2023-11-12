import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './style';
import { Icon } from '@rneui/themed';
import { NavigationService } from '../../../../navigation';
import Button from '../../../NVHC/home/DetailFloor/Components/Button';
import { BigButton } from '../../../../components';
import { routes } from '../../../../constants';

const DetailFloor: React.FC = () => {
  const styles = useStyles();
  const handlenPressGoback = () => {
    NavigationService.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='chevron-left' type='font-awesome' onPress={handlenPressGoback} />
        <Text style={styles.text}>Tầng 1</Text>
        <Icon name='notifications-outline' type='ionicon' />
      </View>
      <View style={styles.button}>
      <BigButton textButton='Hoàn thành' onPressButton={() => NavigationService.navigate(routes.CHECKINKROOM)}/>
      </View>
    </View>
  )
}

export default DetailFloor

const styles = StyleSheet.create({})