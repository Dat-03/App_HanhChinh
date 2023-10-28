import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { NavigationService } from '../../../../navigation';
import { Icon } from '@rneui/base';
import styles from './styles';
import { ItemFlatlistProps } from './types';
import { BigButton, HeaderCustom } from '../../../../components';
import ItemList from './components/itemlist';



const CheckingRoom: React.FC = () => {
  const [check, setcheck] = useState(false)
  const handleGoback = () => {
    NavigationService.goBack();
  }
  const render = ({ item }: { item: (typeof DATA)[0] }) => (
    <ItemList {...item} />

)
  return (

    <View style={styles.container}>
      {/* HEADER */}
      <HeaderCustom 
      leftIcon={{name:'left',type :'antdesign'}}
      title='F001'
      rightIcon={{name:'bell',type :'font-awesome',color:'white'}}
      />
      <Text style={styles.title}>Danh mục tài sản</Text>
      {/* FLTLIST */}
      <FlatList
        data={DATA}
        renderItem={render}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      {/* BUTTON */}
      <BigButton textButton='Hoàn thành' style={{alignItems:'center'}}/>
    </View>
  )
}

export default CheckingRoom
const DATA =[
  {id:'1',name:'Tivi',quantity:'1'},
  {id:'2',name:'Đồng hồ',quantity:'1'},
  {id:'3',name:'Bàn học',quantity:'21'},
  {id:'4',name:'Ghế',quantity:'40'},
  {id:'5',name:'Remote',quantity:'1'},
  {id:'6',name:'Bút viết',quantity:'3'},
  {id:'7',name:'Xóa bảng',quantity:'1'},
  {id:'8',name:'Dây HDMI',quantity:'1'},
  {id:'9',name:'Dây HDMI',quantity:'1'},

]

