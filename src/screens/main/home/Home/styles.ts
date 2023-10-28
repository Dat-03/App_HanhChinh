import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {theme} from '../../../../theme';
import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  header: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(43),
  },
  textName: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: '#FEFEFE',
    marginStart: normalize(12),
  },
  content: {
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
    backgroundColor: colors.white0,
    flex: 1,
  },
  textContent: {
    textAlign: 'center',
    paddingTop: normalize(20),
    fontSize: normalize(18),
    fontWeight: '700',
    color: '#212121',
  },
  button: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(24),
  },
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: 48,
  },
});

export default styles;
