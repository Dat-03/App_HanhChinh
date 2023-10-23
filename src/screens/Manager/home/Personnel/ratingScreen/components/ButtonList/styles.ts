import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import { Device } from '../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default styles;
