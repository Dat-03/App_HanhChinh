import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../../assets/colors';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  image: {
    width: normalize(378),
    height: normalize(232),
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
  },
  text1: {
    color: colors.black,
    fontSize: normalize(18),
    fontWeight: '600',
    textAlign: 'center',
    padding: normalize(16),
  },
  time: {
    width: normalize(69),
    height: normalize(26),
    borderRadius: normalize(30),
    backgroundColor: colors.colorMain,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  texttime: {
    color: colors.white,
    fontSize: normalize(15),
    fontWeight: '400',
  },
  text2: {
    color: colors.grey4,
    fontSize: normalize(15),
    fontWeight: '400',
  },
  text3: {
    color: colors.black,
    fontSize: normalize(15),
    fontWeight: '600',
  },
  viewText: {
    paddingHorizontal: normalize(16),
  },
  text4: {
    color: colors.grey4,
    fontSize: normalize(15),
    fontWeight: '400',
    marginStart: normalize(12),
  },
  textInput: {
    width: '100%',
    borderWidth: 0.4,
    borderRadius: 15,
  },
  text5: {
    color: colors.grey4,
    fontSize: normalize(15),
    fontWeight: '400',
  },
  text6: {
    color: colors.black,
    fontSize: normalize(15),
    fontWeight: '600',
  },
});
export default styles;
