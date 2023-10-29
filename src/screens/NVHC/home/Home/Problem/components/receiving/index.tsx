import { View, Text,Image,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { images } from '../../../../../../../assets'
import ItemListReceiving from './ItemListReceiving'

const Receiving:React.FC = () => {
  const render = ({ item }: { item: (typeof DATA)[0] }) => (
    <ItemListReceiving {...item} />

)
  return (
    <View style={styles.container}>
      <FlatList 
                data={DATA}
                renderItem={render}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                
                 />
    </View>
  )
}

export default Receiving
const DATA = [
  { id: '1',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },
  { id: '2',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },
  { id: '3',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },
  { id: '4',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },
  { id: '5',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },
  { id: '6',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },
  { id: '7',problem:'Sự cố máy chiếu hỏng', name: "Lê Văn Hiếu", building: "T", room: "1101", time: "09h45", date: "17/02/2023" },

]