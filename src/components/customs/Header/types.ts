import {TextStyle, ViewProps, ViewStyle} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};

export type HeaderImage = {
  uri?: string;
};

export type CustomHeaderProps = {
  viewStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  textFullName?:ViewStyle;
  leftIcon?: HeaderIcon;
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  onPressRightIconMiddle?: () => void;
  rightIconMiddle?: HeaderIcon;
  rightIcon?: HeaderIcon;
  imageUri?: HeaderImage;
  fullName?: string;
  userStatus?: string;
  leftIconStyle?: ViewStyle;
};
