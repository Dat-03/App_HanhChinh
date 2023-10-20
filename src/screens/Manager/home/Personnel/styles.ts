import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
  },
  tabStyle: {},
  titleStyle: {
    color: colors.blue,
    fontSize: normalize(18),
  },
}));

export default useStyles;
