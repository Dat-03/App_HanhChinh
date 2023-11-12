import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const Room: React.FC = () => {

    const [check, setcheck] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.chooseroom}>
                <View style={styles.room}>
                    <Text >F209</Text>
                </View>
                <View style={styles.room}>
                    <Text >F210</Text>
                </View>
                <View style={styles.room}>
                    <Text >F211</Text>
                </View>
                <View style={styles.room}>
                    <Text >F212</Text>
                </View>
                <View style={styles.room}>
                    <Text >F214</Text>
                </View>
            </View>
            <View style={styles.chooseroom2}>
                <View style={styles.chooseroom1}>
                    <View style={styles.columns}>
                        <Text >P.GV</Text>
                    </View>
                    <View style={styles.columns}>
                        <Text >F208</Text>
                    </View>
                </View>
                <View style={styles.chooseroom3}>
                    <View style={styles.columns}>
                        <Text >F201</Text>
                    </View>
                    <View style={styles.columns}>
                        <Text >F202</Text>
                    </View>
                </View>
                <View style={styles.chooseroom4}>
                    <View style={styles.room}>
                        <Text >F213</Text>
                    </View>
                </View>
            </View>
            <View style={styles.chooseroom}>
                <View style={styles.room}>
                    <Text >F207</Text>
                </View>
                <View style={styles.room}>
                    <Text >F206</Text>
                </View>
                <View style={styles.room}>
                    <Text >F205</Text>
                </View>
                <View style={styles.room}>
                    <Text >F204</Text>
                </View>
                <View style={styles.room}>
                    <Text >F203</Text>
                </View>
            </View>

        </View>
    )
}

export default Room



