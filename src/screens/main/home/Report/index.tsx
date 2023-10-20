import { View, Image } from 'react-native';
import { Text } from '@rneui/base';

import React, { FunctionComponent } from 'react';

import useStyles from './styles';
import { images } from '../../../../assets';
import { Icon } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';
import { normalize } from 'path/posix';

const Report = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='chevron-left' type='font-awesome' />
                <Text style={styles.text}>Báo cáo sự cố</Text>
            </View>
            <TextInput style={styles.textinput}>phòng</TextInput>
            <TextInput style={styles.textinput}>phòng</TextInput>
            <TextInput style={styles.textinput}>phòng</TextInput>
        </View>
    )
}

export default Report

