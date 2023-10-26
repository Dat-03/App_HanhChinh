import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { NavigationService } from '../../../../../../../navigation';
import { routes } from '../../../../../../../constants';
import styles from './styles';
import { images } from '../../../../../../../assets';


interface Item{
    problem:string,
    name:string,
    time:string,
    building:string,
    room:string,
    date:string
}

const ItemListReceiving:React.FC<Item> = (props:any) => {
    const {problem,name,time,building,room,date}=props;
    const GotoDetail=()=>{
        NavigationService.navigate(routes.DETAILPROBLEM)
    }
  return (
    <View>
        <TouchableOpacity onPress={GotoDetail}>
                <View style={styles.itemProlem}>
                    <View style={styles.nameProblem}>
                        <Text style={{ fontSize: 18, color: 'black' }}>{problem}</Text>
                        <Text style={{ color: '#D8CC54' }}>10':02"</Text>
                    </View>
                    <View style={styles.info}>
                        <Image source={images.avatar} style={styles.img} />
                        <View style={{ marginStart: 10 }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>{name}</Text>
                            <View style={styles.location}>
                                <Text>Tòa: {building}</Text>
                                <Text style={{ marginLeft: 10 }}>Phòng: {room}</Text>
                                <Text style={{ marginLeft: 10 }}>{time}</Text>
                                <Text style={{ marginLeft: 10 }}>{date}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    </View>
  )
}

export default ItemListReceiving