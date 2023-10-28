import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalize } from '@rneui/themed'


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:normalize(10),
        flexDirection:'row',
        
        marginVertical:normalize(5),
    },
    item:{
        paddingHorizontal:normalize(5),
        borderRadius:normalize(10),
        backgroundColor:'#EBEBEB',
        height:normalize(35),
        width:normalize(110),
        justifyContent:'center',
        marginRight:normalize(5)

    },
    name:{
        fontSize:14,
        color:'black',
        marginHorizontal:normalize(5)
        
    },
    checkbox:{
        width:normalize(30),
        height:normalize(53),
        alignItems: 'center',
        marginVertical:normalize(-10),  
    },
    item1:{
        marginHorizontal:normalize(-8),
        borderRadius:normalize(10),
        backgroundColor:'#EBEBEB',
        height:normalize(35),
        width:normalize(120),
        justifyContent:'center',
        marginRight:normalize(10),
        paddingHorizontal:normalize(5)

    },
    item2:{
        paddingHorizontal:normalize(5),
        borderRadius:normalize(10),
        backgroundColor:'#EBEBEB',
        height:normalize(35),
        width:normalize(100),
        justifyContent:'center',
        marginRight:normalize(5)

    },
})


export default styles

