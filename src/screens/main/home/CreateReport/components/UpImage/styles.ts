import {StyleSheet} from 'react-native';
import {normalize} from '@rneui/themed';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize(16),
  },
});

export default styles;
