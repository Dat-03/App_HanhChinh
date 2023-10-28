import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorMain,
    flexDirection: 'row',
    marginVertical: normalize(HEIGHT * 0.01),
    width: '100%',
    height: normalize(40),
  },
  buttonText: {
    fontSize: normalize(15),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.grey0,
  },
}));

export default useStyles;
