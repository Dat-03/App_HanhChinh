import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewheader: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  textHeader: {
    fontSize: normalize(30),
    color: colors.black0,
    fontWeight: 'bold',
  },
  textRoom: {
    fontSize: normalize(17),
    color: colors.grey3,
    padding: normalize(10),
    marginStart: normalize(10),
  },
});

export default styles;
