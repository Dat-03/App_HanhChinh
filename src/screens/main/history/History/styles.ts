import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors';


const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const styles = StyleSheet.create({
    container: {
      flex: normalize(2), 
      height: normalize(HEIGHT * 0.058),
      backgroundColor:colors.background1
    },
  });
  

export default styles;
