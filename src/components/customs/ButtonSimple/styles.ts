import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(10),
    width: normalize(100),
    height: normalize(100),
    borderWidth: normalize(0.5),
    borderColor: colors.grey5,
    alignItems: 'center',
    paddingVertical: normalize(15),
    backgroundColor: '#E9ECEF',
  },
  buttonText: {
    fontSize: normalize(14),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
  },
}));

export default useStyles;
