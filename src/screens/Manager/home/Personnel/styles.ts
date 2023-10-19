import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.colorMain,
  },
  content: {
    flex: normalize(1),
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: colors.grey0,
  },
  tabStyle: {},
  titleStyle: {
    color: colors.colorMain,
    fontWeight: 'bold',
  },
}));

export default useStyles;
