import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';
import {StyleSheet} from 'react-native';
import colors from '../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: colors.white0,
  },
});

export default styles;
