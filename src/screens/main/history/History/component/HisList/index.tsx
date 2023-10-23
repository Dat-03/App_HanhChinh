import { View, Text ,FlatList,Image, Touchable} from 'react-native'
import React from 'react'
import useStyles from './styles'
import { images } from '../../../../../../assets';
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HisList:React.FC = () => {
  const styles=useStyles();
  const clickDetail=()=>{
        NavigationService.navigate(routes.DETAIL)
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch Sử</Text>
      {/* Flat List */}
      <TouchableOpacity onPress={clickDetail}>
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
                <Image source={images.avatar} style={styles.img} />
            </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={clickDetail}>
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
                <Image source={images.avatar} style={styles.img} />
            </View>
        </View>
      </TouchableOpacity>
        

    </View>
  )
}

export default HisList