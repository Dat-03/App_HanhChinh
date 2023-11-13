import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {},
  button1: {
    width: normalize(343),
    height: normalize(151),
    borderRadius: normalize(10),
    backgroundColor: colors.blue0,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(36),
  },
  text1: {
    fontSize: normalize(24),
    color: colors.white,
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
