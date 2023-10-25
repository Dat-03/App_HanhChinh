import {TextStyle, ViewProps, ViewStyle} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};

export type CustomHeaderMainProps = {
  viewStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  leftIcon?: HeaderIcon;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  rightIcon?: HeaderIcon;
};
