import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
  },
  
}));

export default usestyles;
