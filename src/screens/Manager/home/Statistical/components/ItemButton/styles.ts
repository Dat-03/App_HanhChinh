import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  buttonStyle: {
    margin: normalize(10),
  },
  listStyle: {
    gap: normalize(10),
  },
}));

export default usestyles;
