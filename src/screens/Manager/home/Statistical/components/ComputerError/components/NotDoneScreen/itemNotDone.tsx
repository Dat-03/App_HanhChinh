import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';

interface Item {
    nameProblem: string,
    nameRequire: string,
    nameAccept: string,
    room: string,
    status: string
}


const ItemNotDone: React.FC<Item> = (props) => {
    const { nameProblem, nameRequire, nameAccept, room, status } = props;
    return (
        <View style={styles.containerItem}>
            <View style={styles.itemText}>
                <Text style={styles.problem}>{nameProblem}</Text>
                <Text style={styles.txt}>Phòng:{room} </Text>
            </View>
            <View style={styles.itemTxt}>
                <Text style={styles.problem}>Người yêu cầu: {nameRequire} </Text>
               
            </View>
            <View style={styles.container1}>
                <View style={styles.itemTxt}>
                    <Text style={styles.problem}>Người tiếp nhận: {nameAccept} </Text>
                
                </View>
                <Text style={styles.status}>{status}</Text>
            </View>
        </View>
    )
}

export default ItemNotDone