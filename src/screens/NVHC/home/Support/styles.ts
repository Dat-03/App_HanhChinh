import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(16),
  },
  textHeader: {
    fontSize: normalize(24),
    color: colors.black0,
    fontWeight: '700',
    marginStart: normalize(17),
  },
  viewTimeline: {
    height: normalize(310),
    width: '100%',
  },
  textTimeline: {
    fontSize: normalize(14),
    color: colors.black0,
    fontWeight: '700',
    paddingHorizontal: normalize(16),
  },
  button: {
    paddingVertical: normalize(72),
    paddingHorizontal: normalize(16),
  },
  viewNotification: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(22),
  },
});
export default styles;
