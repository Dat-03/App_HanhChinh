import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../../assets/colors'
import { normalize } from '@rneui/themed'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title:{
    paddingStart:normalize(20),
    marginVertical:normalize(20),
    fontSize:normalize(18),
    fontWeight:'bold',
    color:'black'
  },
  btn:{
  
  }

  
});
export default styles;