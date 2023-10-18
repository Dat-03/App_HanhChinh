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
 }


}));

export default useStyles;