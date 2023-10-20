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
    fontSize: normalize(15),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
  },
  textTitle: {
    fontSize: normalize(13),
    fontWeight: '400',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.grey3,
  },
  viewText: {
    marginEnd: normalize(30),
  },
}));

export default useStyles;
