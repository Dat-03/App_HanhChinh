import {StyleSheet} from 'react-native';
import {normalize} from '@rneui/themed';
import colors from '../../../assets/colors';
import {Device} from '../../../utils';
Device.getDeviceWidth();

const styles = StyleSheet.create({
  container: {
    height: Device.getDeviceWithScreen() * 0.15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    backgroundColor: colors.white,
  },
  textTitle: {
    fontSize: normalize(24),
    lineHeight: normalize(36),
    color: colors.black,
    marginStart: normalize(50),
    fontWeight: '700',
    textAlign: 'center',
  },
  leftIcon: {
    color: colors.black,
  },

  rightIcon: {
    color: colors.black,
  },
});

export default styles;
