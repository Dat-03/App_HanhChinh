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
    marginBottom:normalize(20),
  },
  text:{
    fontSize:normalize(14),
    fontWeight:'500'
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
  containerBtn:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginHorizontal: 10
  },
  btn:{
    alignSelf:'center',
    width:'48%',
    backgroundColor:'#29D13A',
    fontSize:normalize(12),
    fontWeight:'700'
  },
  btn1:{
    alignSelf:'center',
    width:'51%',
    backgroundColor:'#FF2D2D',
    fontSize:normalize(12),
    fontWeight:'700',
    marginHorizontal:normalize(5)
  },
  can:{
    color:colors.white
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
  },
  header:{
    flexDirection:'row',
    marginHorizontal:normalize(10),
    marginVertical:normalize(20),
    justifyContent:'space-between'
  },
  name:{
    color:colors.black,
    fontSize:normalize(18),
    fontWeight:'500'
  },
  infomation1:{
    color:colors.black,
    fontSize:normalize(14),
    fontWeight:'500',
    
  },
  infomation:{
    color:colors.black,
    fontSize:normalize(14),
    fontWeight:'500',
    marginStart:normalize(10)
  },
  itemChild:{
    flexDirection:'row',
    marginVertical:normalize(10)
  },
  itemLastChild:{
    flexDirection:'row',
    marginVertical:normalize(10),
    width:'70%'
  }
  });
  

export default styles;
