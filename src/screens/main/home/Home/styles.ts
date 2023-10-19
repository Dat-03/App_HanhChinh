import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.primary,
  },
 header:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingTop:normalize(150),
  paddingHorizontal:normalize(20),
  marginVertical:normalize(20)
 },
 avatar:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
 },
 name:{
  fontSize:normalize(18),
  marginStart:normalize(15)
 },
 notification:{
  paddingVertical:normalize(10)
 },
 View:{
  backgroundColor:colors.white,
  height:normalize(HEIGHT*1),
  width:normalize(HEIGHT*0.47),
  borderRadius:normalize(10),

 },
 button:{
  paddingTop:normalize(200),
 }, 
}));

export default useStyles;
