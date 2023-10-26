import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../../../assets/colors';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  viewbig: {
    width: '100%',
    height: normalize(101),
    backgroundColor: colors.line,
    borderRadius: normalize(10),
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(10),
  },
  textTitle: {
    fontSize: normalize(14),
    color: colors.black0,
    fontWeight: '600',
    paddingVertical: normalize(7),
  },
  textContent: {
    fontSize: normalize(14),
    color: colors.grey3,
    fontWeight: '400',
  },
  avatar: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
  },
  viewDate: {
    flexDirection: 'row',
    gap: normalize(15),
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
