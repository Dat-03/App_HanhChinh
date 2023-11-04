import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
  },
  text: {
    fontSize: normalize(14),
    fontWeight: '700',
    color: 'black',
  },
  createdAt: {},
  accept_report: {},
  done_report: {},
  circle: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: 99,
    backgroundColor: colors.colorMain,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle2: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: 99,
    backgroundColor: colors.white0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  circle3: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: 99,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: 'black',
  },
  createAt: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  viewText: {
    marginStart: normalize(28),
    justifyContent: 'center',
  },
  viewRow1: {
    flexDirection: 'row',
  },
  line: {
    height: normalize(50),
    width: normalize(2),
    backgroundColor: '#D9D9D9',
    marginStart: normalize(22),
  },
  button: {
    paddingVertical: normalize(30),
  },
});
export default styles;
