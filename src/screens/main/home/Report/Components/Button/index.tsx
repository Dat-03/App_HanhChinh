import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './styles';

const Button = () => {
    const styles = useStyles();
  return (
    <Pressable style={styles.button}>
        <Text style={styles.text}>
            Gửi yêu cầu
        </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({})