import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(8),
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: normalize(10),
    width: '90%',
    height: normalize(66),
    borderWidth: normalize(0.5),
    borderColor:'gray',
    paddingHorizontal:normalize(20)
  },
  buttonText: {
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
    marginStart: normalize(15)
  },
}));

export default useStyles;
