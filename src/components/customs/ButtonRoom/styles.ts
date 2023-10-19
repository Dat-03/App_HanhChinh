import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(10),
    width: '100%',
    height: normalize(101),
    borderWidth: normalize(0.5),
    borderColor: colors.grey5,
    paddingVertical: normalize(15),
    backgroundColor: '#E9ECEF',
    paddingHorizontal: normalize(20),
  },
  typeError: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
  },
  room: {
    fontSize: normalize(15),
    fontWeight: '800',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.grey4,
  },
  deadline: {
    marginStart: normalize(50),
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  viewText: {
    paddingTop: normalize(10),
  },
  viewDeadline: {
    flexDirection: 'row',
  },
}));

export default useStyles;
