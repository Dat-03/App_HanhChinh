import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.colorMain,
  },
  content: {
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    backgroundColor: colors.grey0,
    flex: 1,
  },
}));

export default usestyles;
