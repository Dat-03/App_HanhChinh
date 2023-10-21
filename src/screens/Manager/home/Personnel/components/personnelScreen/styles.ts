import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {theme} from '../../../../../../theme';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
  },
  textNameRoom: {
    fontSize: normalize(18),
    color: colors.grey3,
    padding:normalize(10)
  },
}));

export default useStyles;
