import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewheader: {
    flexDirection: 'row',
    padding: 24,
  },
  textHeader: {
    fontSize: normalize(20),
    color: colors.black0,
    fontWeight: 'bold',
    marginStart: normalize(100),
  },
  textRoom: {
    fontSize: normalize(17),
    color: colors.grey3,
    padding: normalize(10),
    marginStart: normalize(10),
  },
});

export default styles;
