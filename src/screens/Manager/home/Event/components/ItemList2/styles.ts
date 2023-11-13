import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: normalize(345),
    height: normalize(75),
    borderRadius: normalize(8),
    backgroundColor: colors.itemColor,
    alignItems: 'center',
    marginTop: normalize(10),
  },
  viewText1: {
    flexDirection: 'row',
  },
  text1: {
    color: colors.blue1,
    fontSize: normalize(15),
    fontWeight: '400',
  },
  text2: {
    width: normalize(258),
    height: normalize(53),
    color: colors.blue1,
    fontSize: normalize(13),
    fontWeight: '600',
  },
  viewAll: {
    paddingHorizontal: normalize(11),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
