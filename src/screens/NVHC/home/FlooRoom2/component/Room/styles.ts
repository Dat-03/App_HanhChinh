import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalize } from '@rneui/themed'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginStart: normalize(17)
    },
    room: {
        width: normalize(50),
        height: normalize(50),
        backgroundColor: '#EBEBEB',
        borderRadius: normalize(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: normalize(5),

    },
    chooseroom: {
        flexDirection: 'row',


    },
    columns: {
        width: normalize(50),
        height: normalize(50),
        backgroundColor: '#EBEBEB',
        borderRadius: normalize(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: normalize(5),
        marginHorizontal: normalize(5)


    },
    chooseroom1: {
        flexDirection: 'column',

    },
    chooseroom2: {
        flexDirection: 'row',


    },
    chooseroom3: {
        flexDirection: 'row',
        paddingVertical: normalize(30),
        paddingStart: normalize(120)

    },
    chooseroom4: {

    }


})


export default styles
