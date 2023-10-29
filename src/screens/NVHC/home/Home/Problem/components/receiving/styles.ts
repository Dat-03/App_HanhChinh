import {makeStyles, normalize} from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { Device } from '../../../../../../../utils';
import colors from '../../../../../../../assets/colors';



const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  itemProlem:{
    backgroundColor:colors.itemColor,
    borderRadius:normalize(10),
    margin:normalize(10),
    paddingVertical:normalize(10)
  },
  nameProblem:{
    paddingHorizontal:normalize(10),
    flexDirection:'row',
    justifyContent:'space-between'
  },
  info:{
    paddingHorizontal:normalize(10),
    flexDirection:'row',
    marginVertical:normalize(8)
  },
  img:{
    width:normalize(50),
    height:normalize(50),
    borderRadius:normalize(99),   
  },
  location:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginVertical:normalize(5),
  },
  problem:{
    fontSize:normalize(16),
    fontWeight:'500',
    color:colors.black
    
  },
  timeOut:{
    color:colors.timeOut,
    fontWeight:'500',
    fontSize:normalize(12),
  },
  name:{
    color:colors.black,
    fontSize:normalize(12),
    fontWeight:'500',
  },
  marginItem:{
    marginLeft:normalize(10)
  }
  });
  

export default styles;