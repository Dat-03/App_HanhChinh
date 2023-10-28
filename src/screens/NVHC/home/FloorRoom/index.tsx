import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import useStyles from './styles';
import { Icon } from '@rneui/themed';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';

const FloorRoom: React.FC = () => {
  const styles = useStyles();
  const handlenPressGoback =() => {
    NavigationService.goBack();
}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='chevron-left' type='font-awesome' onPress={handlenPressGoback}/>
        <Text style={styles.text}>Tòa F</Text>
        <Icon name='notifications-outline' type='ionicon' />
      </View>
      <Pressable style={styles.viewTap} onPress={() =>NavigationService.navigate(routes.DETAILFLOOR)}>
        <View style={styles.viewroom}>
        <Icon name='home-city' type='material-community' color="#C189FF" style={styles.iconfloor}/>
          <Text style={styles.floor}>Tầng 1</Text>
          <Text style={styles.textroom}>17 Phòng</Text>
        </View>
        <View style={styles.viewroom1}>
        <Icon name='home-city' type='material-community' color="#FFEC86" style={styles.iconfloor}/>
          <Text style={styles.floor}>Tầng 1</Text>
          <Text style={styles.textroom}>17 Phòng</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default FloorRoom

