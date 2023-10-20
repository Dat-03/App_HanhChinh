
import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './style'
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@rneui/base';
import ButtonContent from '../../../../../Manager/home/Home/components/ButtonContent';

const ButtonSp:React.FC = () => {
    const styles=useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} >
            <Text style={styles.textBtn} >Phản hồi</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default ButtonSp