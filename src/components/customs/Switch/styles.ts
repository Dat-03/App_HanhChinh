import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(15),
  },
  text: {
    fontSize: normalize(17),
    fontStyle: 'normal',
    color: colors.black,
    width: '82%',
    fontWeight: 'bold',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
export default useStyles;
