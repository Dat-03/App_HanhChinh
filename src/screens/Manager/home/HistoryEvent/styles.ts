import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
  },
  viewText: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  test1: {
    color: colors.black,
    fontSize: normalize(17),
    fontWeight: '600',
  },
  test2:{
    color: colors.blue1,
    fontSize: normalize(15),
    fontWeight: '400',
  }
});
export default styles;
