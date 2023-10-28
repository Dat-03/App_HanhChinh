import {StyleSheet} from 'react-native';
import {normalize} from '@rneui/themed';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: normalize(16),
    fontWeight: '400',
    lineHeight: normalize(24),
    borderWidth: 0,
    paddingBottom: 0,
    height: normalize(149),
    textAlignVertical: 'top',
  },
  container: {
    borderWidth: normalize(0.5),
    borderRadius: normalize(6),
    backgroundColor: colors.colorInput,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
});

export default styles;
