import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type ButtonSimpleProps = {
  onPressButton?: () => void;
  style?: ViewProps['style'];
  textButton: string;
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};
