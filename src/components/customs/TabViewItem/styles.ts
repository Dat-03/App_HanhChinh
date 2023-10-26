import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {color} from '@rneui/base';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  tabStyle: {
    backgroundColor: colors.grey1,
  },
  containerTabView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleStyle: {
    color: colors.black,
    fontSize: normalize(12),
    fontWeight: 'bold',
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: 'blue',
  },
}));

export default useStyles;
