import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(8),
    alignItems: 'center',
    marginVertical: normalize(10),
    width: '100%',
    height: normalize(66),
    borderWidth: normalize(0.5),
    borderColor: colors.colorBorder,
    paddingHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: normalize(14),
    fontWeight: '500',
    letterSpacing: normalize(0.2),
    color: 'black',
  },
  textTitle: {
    fontSize: normalize(12),
    fontWeight: '400',
    letterSpacing: normalize(0.2),
    color: '#919293',
  },
  viewText: {
    width: normalize(190),
  },
}));

export default useStyles;
