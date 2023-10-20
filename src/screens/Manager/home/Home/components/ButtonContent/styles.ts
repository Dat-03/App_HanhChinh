import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {theme} from '../../../../../../theme';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  content: {
    borderTopLeftRadius: normalize(30),
    backgroundColor: theme.lightColors?.grey0,
    borderTopRightRadius: normalize(50),
    flex: normalize(1),
  },
  textContent: {
    textAlign: 'center',
    paddingTop: normalize(20),
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.black,
  },
  button: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(30),
  },
}));

export default useStyles;
