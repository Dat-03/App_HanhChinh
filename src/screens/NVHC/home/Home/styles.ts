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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(24),
    alignItems: 'center',
  },
  textName: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: colors.grey0,
  },
  content: {
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
    backgroundColor: theme.lightColors?.grey0,
    flex: 1,
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
