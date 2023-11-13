import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalize } from '@rneui/themed'
import colors from '../../../../../../assets/colors'


const styles = StyleSheet.create({
    container:{
        flex:normalize(1)
    },
    titleStyle:{
        color: colors.colorMain,
        fontSize: normalize(12),
        fontWeight: '700',
     
    }
})

export default styles

