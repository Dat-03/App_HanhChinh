import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../../utils';
import colors from '../../../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: normalize(16),
  },
  title: {
    fontWeight: '700',
    color: 'black',
    fontSize: normalize(16),
    textAlign: 'center',
    lineHeight: normalize(24),
  },
  can: {
    color: colors.white,
  },
  content: {
    paddingHorizontal: normalize(20),
    marginBottom: normalize(10),
  },
  text: {
    fontSize: normalize(14),
    fontWeight: '500',
  },
  avatar: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(99),
  },
  info: {
    flexDirection: 'row',
    marginVertical: normalize(10),
    justifyContent: 'space-between',
  },
  call: {
    backgroundColor: '#E9ECEF',
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(99),
    justifyContent: 'center',
  },
  btn: {
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    marginHorizontal: normalize(10),
    marginVertical: normalize(20),

    justifyContent: 'space-between',
  },
  name: {
    color: colors.black,
    fontSize: normalize(18),
    fontWeight: '500',
    lineHeight: normalize(26),
  },
  infomation1: {
    color: colors.black,
    fontSize: normalize(14),
    lineHeight: normalize(21),
    fontWeight: '400',
  },
  infomation: {
    color: colors.black,
    fontSize: normalize(14),
    fontWeight: '500',
    marginStart: normalize(10),
  },
  itemChild: {
    flexDirection: 'row',
    marginVertical: normalize(10),
  },
  itemLastChild: {
    flexDirection: 'row',
    marginVertical: normalize(10),
    width: '70%',
  },
});

export default styles;
