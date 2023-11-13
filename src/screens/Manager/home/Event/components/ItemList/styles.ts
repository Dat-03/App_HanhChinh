import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  image:{
    width: normalize(191),
    height: normalize(160),
    borderRadius: normalize(10)
  },
  viewImage:{
    marginStart: normalize(12)
  }
});
export default styles;
