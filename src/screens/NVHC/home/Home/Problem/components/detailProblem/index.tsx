import { View, Text,Image, Touchable } from 'react-native'
import React from 'react'
import styles from './styles'
import { BigButton, Button, ButtonSimple, HeaderCustom } from '../../../../../../../components'
import { NavigationService } from '../../../../../../../navigation'
import { images } from '../../../../../../../assets'
import { Icon } from '@rneui/base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { routes } from '../../../../../../../constants'

const DetailProblem:React.FC = () => {
    const handlePressGoback = () => {
        NavigationService.goBack();
      };
      const handlePressGoDone = () => {
        NavigationService.navigate(routes.DONEPROBLEM);
      };
  return (
    <View style={styles.container}>
      <HeaderCustom
      leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
      title='Sự cố về cơ sở vật chất'
      titleStyle={styles.title}
      onPressLeftIcon={handlePressGoback}/>
      <View style={styles.content}>
            <Text style={styles.text}>Tên người yêu cầu:</Text>
            <View style={styles.info}>
                <Image source={images.avatar} style={styles.avatar}/>
                <View style={{marginEnd:100}}>
                    <Text style={{color:'black',fontSize:20}}>Lê Văn Hiếu</Text>
                    <Text style={{color:'black',fontSize:15}}>0797151033</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.call}>
                        <Icon name='phone' type='font-awesome' />
                    </View>
                </TouchableOpacity>        
            </View>
            <View style={{flexDirection:'row',marginVertical:10}}>
                <Text style={styles.text}>Thời gian:</Text>
                <Text style={{color:'black',fontSize:18,marginStart:10}}> 09:05 am</Text>
            </View>
            <View style={{flexDirection:'row',marginVertical:10}}>
                <Text style={styles.text}>Phòng:</Text>
                <Text style={{color:'black',fontSize:18,marginStart:10}}> T1101</Text>
            </View>
            <View style={{flexDirection:'row',marginVertical:10,width:'70%'}}>
                <Text style={styles.text}>Mô tả sự cố:</Text>
                <Text style={{color:'black',fontSize:18,marginStart:10}}>Bóng đèn cháy, lỗi ti vi, lỗi điều hòa</Text>
            </View>
      </View>
        <BigButton onPressButton={handlePressGoDone} textButton='Tiếp nhận' style={styles.btn}/>
    </View>
  )
}

export default DetailProblem