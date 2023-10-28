import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewheader: {
    alignItems: 'center',
    paddingVertical: 18,
  },
  textHeader: {
    fontSize: normalize(30),
    color: colors.black0,
    fontWeight: 'bold',
  },
  textRoom: {
    fontSize: normalize(14),
    color: '#ADADAD',
    padding: normalize(10),
    marginStart: normalize(5),
    fontWeight: '600',
  },
});

export default styles;
