import {makeStyles, normalize} from '@rneui/themed';

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: normalize(1),
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  text: {
    fontSize: normalize(23),
    paddingVertical: normalize(30),
    paddingHorizontal: normalize(100),
    fontWeight: 'bold',
  },
  floor: {
    fontSize: normalize(17),
    paddingStart: normalize(10),
    borderRadius: 10,
    fontWeight: 'bold',
    paddingTop:normalize(5),
   

  },
  viewroom: {
    width: '30%',
    height: 150,
    borderRadius: normalize(10),
    backgroundColor:'white',
    marginStart:20
  },
  viewroom1: {
    width: '30%',
    height: 150,
    borderRadius: normalize(10),
    backgroundColor: '#FFFADD',
    marginStart:20
  },
  viewTap:{
    flexDirection:'row'
  },
  textroom:{
    paddingTop:normalize(10),
    paddingStart:normalize(10),
    fontSize:normalize(17)
  },
  iconfloor:{
    paddingTop:normalize(30),
    paddingEnd:normalize(60),
    fontSize:normalize(17),
    
  }
})

export default styles;

