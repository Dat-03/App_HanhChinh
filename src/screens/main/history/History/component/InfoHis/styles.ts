import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
 container:{
    height:normalize(40),
    marginHorizontal:normalize(20),
    marginVertical:normalize(50),

 },
 img:{
    width:normalize(50),
    height:normalize(50),
  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:normalize(60)
  },
  name:{
    fontSize:normalize(18),
    marginLeft:normalize(-100),
    color:colors.white,
    marginTop:normalize(20)

  }

}));

export default useStyles;