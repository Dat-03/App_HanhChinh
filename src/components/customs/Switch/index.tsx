import React, {useState} from 'react';
import {Text, View} from 'react-native';
import useStyles from '../Switch/styles';
import {SwitchCustomProps} from '../Switch/types';

import {Switch} from '@rneui/themed';

export const Switch_custom: React.FunctionComponent<
  SwitchCustomProps
> = props => {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  const {title} = props;
  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      {title && <Text style={styles.text}>{title}</Text>}
      <Switch
        trackColor={{false: '#F4DDBD', true: '#ec449c'}}
        thumbColor={checked ? '#ffffff' : '#ec449c'}
        ios_backgroundColor="#3e3e3e"
        value={checked}
        onValueChange={value => setChecked(value)}
        style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}} // size adjustment
      />
    </View>
  );
};

export default Switch_custom;
