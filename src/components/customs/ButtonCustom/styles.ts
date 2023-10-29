import {StyleSheet} from 'react-native';
import {normalize} from '@rneui/themed';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    width: '100%',
    height: normalize(40),
    borderRadius: 8,
  },

  titleStyle: {
    fontSize: normalize(12),
    lineHeight: normalize(18),
    fontWeight: '700',
    color: colors.white,
  },
});

export default styles;
