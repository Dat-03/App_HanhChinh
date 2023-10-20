import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { Icon } from '@rneui/themed';
import { LayoutAnimationType } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation';
const Button = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Icon name='pencil-square' type='font-awesome' color="#ec449c"/>
                <Text style={styles.tile}>Báo cáo sự cố</Text>   
            </View>
            <View style={styles.button}>
                <Icon name='passport' type='font-awesome-5' color="#ec449c"/>
                <Text style={styles.tile}>Báo cáo sự cố</Text>   
            </View><View style={styles.button}>
                <Icon name='list-alt' type='font-awesome' color="#ec449c"/>
                <Text style={styles.tile}>Báo cáo sự cố</Text>   
                
            </View>
        </View>
    )
}

export default Button
