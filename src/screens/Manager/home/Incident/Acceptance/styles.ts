import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../utils';
import { theme } from '../../../../../theme';


const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: theme.lightColors?.colorMain,
  },
  content: {
    flex: normalize(1),
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: theme.lightColors?.grey0,
  },
}));

export default usestyles;
