import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ButtonProps} from './types';
import {Avatar, Icon} from '@rneui/themed';

const ButtonCustom: React.FunctionComponent<ButtonProps> = props => {
  const styles = useStyles();
  const {
    textButton,
    onPressButton,
    style,
    name,
    type,
    color,
    size,
    textTitle,
    iconRight,
    isTitle,
  } = props;

  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.button, style]}>
      <Avatar icon={{name: name, type: type, color: color, size: size}} />
      <View style={styles.viewText}>
        <Text style={[styles.buttonText, style]}>{textButton}</Text>
        {isTitle && <Text style={styles.textTitle}>{textTitle}</Text>}
      </View>
      <View>
        {iconRight && <Icon name="right" type="antdesign" size={25} />}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
