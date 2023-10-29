import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {makeStyles, normalize} from '@rneui/themed';
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';
import { images } from '../../../../../../assets';
import colors from '../../../../../../assets/colors';

interface Item{
    problemFrom:string,
    name:string,
    time:string,
    room:string,
    date:string
}
const ItemHisList:React.FC<Item> = (props) => {
    const {problemFrom,name,time,room,date}=props;
    const clickDetail=()=>{
        NavigationService.navigate(routes.DETAIL)
  };
  return (
    <View>
       <TouchableOpacity onPress={clickDetail}>
      <View style={styles.hislist}>
            <View >
                <Text style={styles.title1}>{problemFrom}</Text>
                <Text style={{color:'black'}} >Người tiếp nhận: {name}</Text>
                <View style={styles.info}>
                    <Text style={{color:'black'}}>{date}</Text>
                    <Text style={styles.text}>{time} am</Text>
                    <Text style={styles.text}>Phòng: {room}</Text>
                </View>
            </View>
            <View style={styles.avatar}>
                <Image source={images.avatar} style={styles.img} />
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ItemHisList

const styles = StyleSheet.create({
    hislist: {
        height: normalize(100 ),
        backgroundColor:colors.itemColor,
        borderRadius:normalize(5),
        marginHorizontal:normalize(10),
        marginVertical:normalize(10),
        flexDirection:'row',
        paddingLeft:normalize(10),
        justifyContent:'space-between'
      },
      title1:{
        color:colors.black,
        fontSize:normalize(15),
        fontWeight:'bold',
        marginBottom:normalize(15),
        marginTop:normalize(10)
      },
      info:{
        flexDirection:'row',
        marginTop:normalize(5),
      },
      text:{
        color:colors.black,
        marginLeft:normalize(20)
      },
      avatar:{
          justifyContent:'center',
          marginRight:normalize(20)
    
      },
      img:{
        width:normalize(50),
        height:normalize(50),
        borderRadius:normalize(50)
      }
})