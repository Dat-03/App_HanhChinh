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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(24),
    alignItems: 'center',
  },
  textName: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.white0,
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
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.black0,
  },
  button: {
    paddingHorizontal: normalize(24),
  },
  textHeader:{
    marginStart:20,
    color:colors.white0,
  }
});

export default styles;
