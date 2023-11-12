import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { CheckBox } from '@rneui/themed'

interface Item{
    name: string,
    quantity: string
}
const ItemList:React.FC<Item> = (props) => {
    const{ name, quantity } = props
    const [check1, setCheck1] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.item2}>
        <Text style={styles.name}>Số lương: {quantity}</Text>
      </View>
      <CheckBox
        checked={check1}
        onPress={() => setCheck1(!check1)}
        containerStyle={styles.checkbox}
        size={40} 
        checkedColor='black'
      
        />
      <View style={styles.item1}>
        <TextInput placeholder='Mô tả' />
      </View>
    </View>
  )
}

export default ItemList

