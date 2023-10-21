import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {theme} from '../../../../theme';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: theme.lightColors?.colorMain,
  },

}));

export default useStyles;
