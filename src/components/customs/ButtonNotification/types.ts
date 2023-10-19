import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type ButtonNotificationProps = {
  onPressButton?: () => void;
  style?: ViewProps['style'];
  typeError: string;
  room: string;
  requeste: string;
  reciever: string;
  deadline: string;
};
