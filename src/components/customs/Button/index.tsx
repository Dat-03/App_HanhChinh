import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ButtonProps} from './types';
import {Avatar, Icon} from '@rneui/themed';

const ButtonCustom: React.FunctionComponent<ButtonProps> = props => {
  const styles = useStyles();
  const {textButton, onPressButton, style, name, type, color, size} =
    props;

  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.button, style]}>
      <Avatar icon={{name: name, type: type, color: color, size: size}} />
      <Text style={[styles.buttonText, style]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
