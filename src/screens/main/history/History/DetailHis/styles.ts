import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../utils';



const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyle = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    
    height: normalize(HEIGHT * 0.058),
  },
  Title:{
    textAlign:'center',
    fontSize:normalize(25),
    marginTop:normalize(10),
    color:colors.black,
    fontWeight:'bold',
   
  },
  noti:{
    marginHorizontal:normalize(20),
    backgroundColor:colors.itemColor,
    marginVertical:normalize(20)
  }
}));

export default useStyle;

