import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalize } from '@rneui/themed'
import colors from '../../../../../../../../assets/colors'


const styles = StyleSheet.create({
    container:{
       flex: normalize(1)
    },
    containerItem:{
        flex:normalize(1),
        paddingHorizontal:normalize(10),
        marginHorizontal:normalize(10),
        marginVertical:normalize(15),
        backgroundColor:colors.itemColor
       
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:normalize(10)
    },
    itemTxt:{
        flexDirection:'row',
        
    },
    problem:{
        fontSize:normalize(14),
        fontWeight:'600',
        color:colors.black
    },
    txt:{
        fontSize:normalize(12),
        fontWeight:'400',
        color:colors.black
    },
    status:{
        fontSize:normalize(12),
        fontWeight:'500',
        color:colors.statusText
    }
})

export default styles
