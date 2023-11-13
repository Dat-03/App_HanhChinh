import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
  },
  textHeader: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: colors.white,
  },
  Search: {
    width: normalize(313),
    height: normalize(40),
    backgroundColor: colors.white,
    borderRadius: normalize(40),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(25),
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: normalize(24),
    borderTopLeftRadius: normalize(24),
  },
  textContent: {
    padding: normalize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1:{
    color:colors.black,
    fontSize: normalize(18),
    fontWeight: '600',
  },
  text2:{
    color:colors.blue0,
    fontSize: normalize(15),
    fontWeight: '400',
  },

});

export default styles;
