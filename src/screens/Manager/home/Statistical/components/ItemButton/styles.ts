import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  buttonStyle: {
    margin: normalize(10),
  },
  listStyle: {
    gap: normalize(10),
  },
});

export default styles;
