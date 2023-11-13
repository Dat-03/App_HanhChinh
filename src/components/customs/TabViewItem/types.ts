import {ViewComponent, ViewStyle, TextStyle} from 'react-native';

export type CustomTabViewItemProps = {
  screen1: any;
  screen2: any;
  screen3?: any;
  screen4?: any;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  viewStyle?: ViewStyle;
  headerDetail?: any;
  tabStyle?: ViewStyle;
  titleStyle?: TextStyle;
};
