import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, ButtonProps} from '@rneui/base';
import styles from './styles';

const ButtonCustom: React.FunctionComponent<ButtonProps> = props => {
  return (
    <Button
      title={props.title}
      buttonStyle={props.buttonStyle || styles.buttonStyle}
      titleStyle={props.titleStyle || styles.titleStyle}
      onPress={props.onPress}
    />
  );
};

export default ButtonCustom;
