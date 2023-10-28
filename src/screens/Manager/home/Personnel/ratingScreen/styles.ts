import {makeStyles, normalize} from '@rneui/themed';
import {color} from '@rneui/base';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../utils';
import colors from '../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textName: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.black0,
    padding: normalize(20),
  },
});

export default styles;
