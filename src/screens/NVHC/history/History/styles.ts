import { normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles =StyleSheet.create ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.colorMain,
    margin:normalize(10),
    height:'100%',
  },

});

export default useStyles;
