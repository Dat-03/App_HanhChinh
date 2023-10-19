import { Avatar } from '@rneui/themed';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import useStyles from './styles';
import { ButtonSimpleProps } from './types';

const ButtonSimple: React.FunctionComponent<ButtonSimpleProps> = props => {
  const styles = useStyles();
  const {
    textButton,
    onPressButton,
    style,
    name,
    type,
    color,
    size,
  } = props;

  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.button, style]}>
      <Avatar icon={{name: name, type: type, color: color, size: size}} />
      <Text style={[styles.buttonText, style]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSimple;
