import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
  container: {
    marginTop:normalize(10),
    borderRadius:normalize(5),
    paddingLeft:normalize(15),
  },
 title:{
    color:colors.black,
    fontSize:normalize(18),
    fontWeight:'bold'
 },
 itemStatus:{
  flexDirection:'row',
  marginHorizontal:normalize(10),
  
 },
 icon:{
    backgroundColor:colors.background1,
    borderRadius:normalize(50),
    width:normalize(50),
    height:normalize(50),
    justifyContent:'center',
    borderWidth:normalize(1),
    borderColor:colors.itemColor
 },
 icon1:{
  backgroundColor:colors.white,
  borderRadius:normalize(50),
  width:normalize(50),
  height:normalize(50),
  justifyContent:'center',
  borderWidth:normalize(2),
  borderColor:colors.itemColor
},
 content:{
    marginStart:normalize(30)
 },
 statusName:{
    fontWeight:'bold',
    fontSize:normalize(18),
    color:colors.black
 },
 time:{
  color:colors.black
 }


}));

export default useStyles;