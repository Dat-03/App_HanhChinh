import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {color} from '@rneui/base';
import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create ({
  container: {},
  tabStyle: {
    backgroundColor: colors.grey0,
  },
  containerTabView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleStyle: {
    color: colors.black,
    fontSize: normalize(12),
    fontWeight: 'bold',
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: colors.colorMain ,
  },
});

export default styles;
