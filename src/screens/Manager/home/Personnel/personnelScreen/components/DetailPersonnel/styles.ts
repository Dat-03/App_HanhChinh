import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../../../../../assets/colors';
import { Device } from '../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  content: {
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(50),
    backgroundColor: colors.white0,
    flex: 1,
    marginTop: normalize(25),
  },
});

export default styles;
