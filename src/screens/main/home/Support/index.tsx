import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BigButton } from '../../../../components'
import useStyles from './styles'
import { Button, Icon } from '@rneui/base'
import AcceptRequire from './component/AcceptRequire'
import ButtonSp from './component/ButtonSp'
import StatusRequire from './component/StatusRequire'

const Support: React.FC = () => {
    const styles = useStyles();
    
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>Yêu cầu hỗ trợ sự cố</Text>
            <View>
                <AcceptRequire />
            </View>
            <View>
               <StatusRequire/>
            </View>
            <View>
                <ButtonSp />
            </View>

        </View>
    )
}

export default Support

