import { View, Text ,Image} from 'react-native'
import React from 'react'
import useStyles from './styles'
import { color } from '@rneui/base';
import { images } from '../../../../../../assets';

const AcceptRequire:React.FC =  () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Sự cố về cơ sở vật chất</Text>
                <Text style={{color:'black'}} >Người tiếp nhận: Nguyễn Trung Hải</Text>
                <View style={styles.info}>
                    <Text style={{color:'black'}}>8-2-2023</Text>
                    <Text style={styles.text}>09:05am</Text>
                    <Text style={styles.text}>SDT: 0797151033</Text>
                </View>
            </View>
            <View style={styles.avatar}>
                <Image source={images.default} style={styles.img} />
            </View>
        </View>
    )
}

export default AcceptRequire