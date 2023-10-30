import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../../../assets/colors';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  viewbig: {
    width: '100%',
    height: normalize(101),
    backgroundColor: '#F1F4F5',
    borderRadius: normalize(10),
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: normalize(14),
    color: colors.black0,
    fontWeight: '600',
    paddingVertical: normalize(7),
  },
  textContent: {
    fontSize: normalize(12),
    color: colors.black0,
    fontWeight: '400',
  },
  avatar: {
    width: normalize(49),
    height: normalize(49),
    borderRadius: normalize(50),
  },
  viewDate: {
    flexDirection: 'row',
    gap: normalize(12),
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
