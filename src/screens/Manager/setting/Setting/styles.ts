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
  content: {
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: colors.white0,
    flex: 1,
  },
  view: {
    alignItems: 'center',
    paddingVertical: normalize(20),
  },
  image: {
    width: normalize(81),
    height: normalize(81),
    borderRadius: normalize(90),
  },
  viewInfo: {
    paddingVertical: normalize(15),
  },
  nameUser: {
    color: colors.white0,
    fontSize: normalize(20),
  },
  phone: {
    color: colors.white0,
    fontSize: normalize(20),
    textAlign: 'center',
  },
});

export default styles;
