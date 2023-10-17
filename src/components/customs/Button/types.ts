import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type ButtonProps = {
  onPressButton?: () => void;
  style?: ViewProps['style'];
  textButton: string;
};
