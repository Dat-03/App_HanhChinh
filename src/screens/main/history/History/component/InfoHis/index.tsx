import { View, Text ,Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { images } from '../../../../../../assets';
import { Icon } from '@rneui/base';

const InfoHis = () => {
  const styles=useStyles();
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image source={images.default} style={styles.img}/>
            <Text style={styles.name}>Nguyễn Trung Hải</Text>
            <Icon name="bell" type='font-awesome' color={'white'}  />
        </View>
      
    </View>
  )
}

export default InfoHis