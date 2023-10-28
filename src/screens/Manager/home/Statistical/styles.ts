import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {theme} from '../../../../theme';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: colors.white0,
  },
  viewHeadercontent: {
    flexDirection: 'row',
    padding: normalize(24),
  },
  text: {
    marginStart: normalize(65),
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  textName: {
    fontSize: normalize(18),
    color: colors.black0,
    padding: normalize(10),
    marginStart: normalize(2),
    fontWeight: 'bold',
  },
});

export default styles;
