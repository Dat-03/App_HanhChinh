import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {theme} from '../../../../../../theme';

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
    fontSize: normalize(16),
    fontWeight: '600',
    color: colors.grey0,
  },
}));

export default useStyles;
