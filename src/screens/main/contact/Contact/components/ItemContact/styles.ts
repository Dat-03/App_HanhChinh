import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: normalize(80),
    backgroundColor: '#f1f4f5',
    justifyContent: 'center',
    borderRadius: normalize(8),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(8),
    justifyContent: 'space-between',
  },

  image: {
    width: normalize(58),
    height: normalize(58),
    borderRadius: normalize(99),
  },
  nameUser: {
    fontSize: normalize(14),
    fontWeight: '500',
    color: 'black',
  },
  role: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: '#919293',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(23),
  },
  rightIcon: {
    marginEnd: normalize(12),
  },
});
export default styles;
