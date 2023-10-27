import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({
  viewtextContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(24),
  },
  viewIcon: {
    backgroundColor: colors.line,
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(24),
  },
  textContent: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'black',
  },
  textContent2: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'black',
    marginEnd: normalize(115),
  },
  viewSwitch: {
    width: normalize(60),
    position: 'absolute',
    right: normalize(20),
  },
});
export default styles;
