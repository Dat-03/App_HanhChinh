import { View, Text ,FlatList,Image} from 'react-native'
import React from 'react'
import useStyles from './styles'
const HisList:React.FC = () => {
  const styles=useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch Sử</Text>
      {/* Flat List */}
      <View style={styles.hislist}>
            <View >
                <Text style={styles.title1}>Sự cố về cơ sở vật chất</Text>
                <Text style={{color:'black'}} >Người tiếp nhận: Nguyễn Trung Hải</Text>
                <View style={styles.info}>
                    <Text style={{color:'black'}}>8-2-2023</Text>
                    <Text style={styles.text}>09:05am</Text>
                    <Text style={styles.text}>Phòng: T1011</Text>
                </View>
            </View>
            <View style={styles.avatar}>
                <Image source={images.default} style={styles.img} />
            </View>
        </View>
        <View style={styles.hislist}>
            <View >
                <Text style={styles.title1}>Sự cố về thiết bị mạng</Text>
                <Text style={{color:'black'}} >Người tiếp nhận: Trần Thị Nga</Text>
                <View style={styles.info}>
                    <Text style={{color:'black'}}>8-2-2023</Text>
                    <Text style={styles.text}>09:05am</Text>
                    <Text style={styles.text}>Phòng: T1011</Text>
                </View>
            </View>
            <View style={styles.avatar}>
                {/* <Image source={.default} style={styles.img} /> */}
            </View>
        </View>

    </View>
  )
}

export default HisList