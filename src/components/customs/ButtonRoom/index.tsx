import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {ButtonNotificationProps} from './types';

const ButtonNotification: React.FunctionComponent<
  ButtonNotificationProps
> = props => {
  const styles = useStyles();
  const {onPressButton, style, typeError, deadline, reciever, requeste, room} =
    props;
  const deadlineColor =
    deadline === 'Đúng giờ'
      ? 'green'
      : deadline === 'Trễ giờ'
      ? 'red'
      : 'black';
  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.button, style]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.typeError, style]}>{typeError}</Text>
        <Text style={[styles.room, style]}>{room}</Text>
      </View>
      <View style={styles.viewText}>
        <Text>{requeste}</Text>
        <View style={styles.viewDeadline}>
          <Text>{reciever}</Text>
          <Text style={[styles.deadline, style, {color: deadlineColor}]}>
            {deadline}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonNotification;
