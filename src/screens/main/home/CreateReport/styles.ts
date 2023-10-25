import {StyleSheet} from 'react-native';
import {normalize} from '@rneui/themed';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize(16),
  },
  headerStyle: {
    backgroundColor: colors.white,
    width: '100%',
    height: normalize(100),
  },

  selectStyle: {
    backgroundColor: colors.colorInput,
    height: normalize(40),
    paddingVertical: 0,
    alignItems: 'center',
    borderWidth: normalize(0.5),
  },
  inputStyle: {
    fontSize: normalize(16),
    fontWeight: '400',
    lineHeight: normalize(24),
  },
  inputContainer: {
    gap: normalize(20),
  },
});

export default styles;
