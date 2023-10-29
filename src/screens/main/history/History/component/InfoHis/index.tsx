import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'

import { Icon } from '@rneui/base';
import { images } from '../../../../../../assets';
import { HeaderCustom } from '../../../../../../components';

const InfoHis = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={images.avatar} style={styles.img} />
          <Text style={styles.name}>Nguyễn Trung Hải</Text>
        </View>
        <Icon name="bell" type='font-awesome' color={'white'} /> */}
        <HeaderCustom 
        imageUri={images.avatar}
        fullName='Nguyễn Trung Hải' 
        rightIcon={{name:"bell", type:'font-awesome',color:'white'}}
        />
      </View>

    </View>
  )
}

export default InfoHis