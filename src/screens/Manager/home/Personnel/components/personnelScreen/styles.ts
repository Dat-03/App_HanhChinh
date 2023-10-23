import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {theme} from '../../../../../../theme';
import {StyleSheet} from 'react-native';
import colors from '../../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textNameRoom: {
    fontSize: normalize(18),
    color: colors.grey3,
    padding: normalize(10),
  },
});

export default styles;
