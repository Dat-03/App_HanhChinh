import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import { StyleSheet } from 'react-native';
import colors from '../../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(10),
    marginTop: normalize(43),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: 48,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: normalize(60),
    alignItems: 'center',
  },
  name: {
    fontSize: normalize(18),
    color: colors.white,
    marginStart: normalize(10),
  },

  textName: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FEFEFE',
    marginStart: normalize(12),
  },
});

export default useStyles;
