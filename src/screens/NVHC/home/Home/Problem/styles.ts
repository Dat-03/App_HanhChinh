import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';

import {Device} from '../../../../../utils';
import colors from '../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: colors.grey0,
  },
  tabStyle: {},
  titleStyle: {
    color: colors.colorMain,
    fontSize: normalize(12),
    fontWeight: '700',
  },
});

export default styles;
