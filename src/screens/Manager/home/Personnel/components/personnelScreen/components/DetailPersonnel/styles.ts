import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.colorMain,
  },
  content: {
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(50),
    backgroundColor: colors.grey0,
    flex: normalize(1),
    marginTop:normalize(25)
  },
}));

export default useStyles;
