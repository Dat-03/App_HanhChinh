import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './styles';
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';

const Button = () => {
    const styles = useStyles();
  return (
    <Pressable style={styles.button} onPress={() =>NavigationService.navigate(routes.CHECKINKROOM)}>
        <Text style={styles.text}>
            Hoàn Thành
        </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({})