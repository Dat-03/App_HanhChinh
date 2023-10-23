import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../utils';


const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
    container: {
      flex: normalize(2), 
      height: normalize(HEIGHT * 0.058),
      backgroundColor:colors.background1
    },
  }));
  

export default useStyles;
