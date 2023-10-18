import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'
import TimelineScreen from './timeline';

const Timeline: React.FC = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trạng thái yêu cầu</Text>
            <View style={{flex:1}}>
                <TimelineScreen />
            </View>

        </View>
    )
}

export default Timeline