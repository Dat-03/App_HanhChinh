import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../../../../assets/colors';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  content: {
    borderTopLeftRadius: normalize(30),
    backgroundColor: colors.grey5,
    borderTopRightRadius: normalize(50),
  },
  textContent: {
    textAlign: 'center',
    paddingTop: normalize(20),
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.black0,
  },
  button: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(30),
  },
  scrollView: {},
});

export default styles;
