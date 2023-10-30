import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../../utils';
import colors from '../../../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemProlem: {
    width: WIDTH - normalize(16) * 2,
    backgroundColor: colors.white,
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
    marginVertical: normalize(14),
    height: normalize(99),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    justifyContent: 'space-around',
  },

  nameProblem: {
    paddingHorizontal: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    paddingHorizontal: normalize(10),
    flexDirection: 'row',
    marginVertical: normalize(8),
  },
  img: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: normalize(99),
  },
  location: {
    flexDirection: 'row',
    paddingVertical: normalize(5),
  },
  problem: {
    lineHeight: normalize(23.38),
    fontSize: normalize(16),
    fontWeight: '500',
    color: colors.black,
  },
  timeOut: {
    color: colors.timeOut,
    fontWeight: '500',
    fontSize: normalize(12),
  },
  name: {
    color: colors.black,
    fontSize: normalize(12),
    fontWeight: '500',
  },
  marginItem: {
    marginRight: normalize(10),
    fontSize: normalize(10),
    lineHeight: normalize(15),
  },
});

export default styles;
