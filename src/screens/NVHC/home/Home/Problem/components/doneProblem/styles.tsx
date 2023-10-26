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
  title:{
    fontWeight:'bold',
    color:'black',
    fontSize:18,
    alignSelf:'center'
  },
  content:{
    paddingHorizontal:normalize(20),
    marginVertical:normalize(20),
 
  },
  text:{
    fontSize:18
  },
  avatar:{
    width:normalize(50),
    height:normalize(50),
    borderRadius:normalize(99),
  },
  info:{
    flexDirection:'row',
    marginVertical:normalize(10),
    justifyContent:'space-between'
  },
  call:{
    backgroundColor:'#E9ECEF',
    width:normalize(50),
    height:normalize(50),
    borderRadius:normalize(99),
    justifyContent:'center'
  },
  btn:{
    alignSelf:'center',
    width:'48%',
    backgroundColor:'#29D13A'
  },
  btn1:{
    alignSelf:'center',
    width:'48%',
    backgroundColor:'#FF2D2D',
  },
  textinput:{
    backgroundColor:colors.itemColor,
    marginHorizontal:normalize(10),
    borderWidth:normalize(2),
    borderRadius:normalize(10),
    borderColor:'#D9D9D9',
    
  },
  dropdown:{
    marginHorizontal:normalize(10),
    marginVertical:normalize(10),
    flexDirection:'row'
  }
  });
  

export default styles;
