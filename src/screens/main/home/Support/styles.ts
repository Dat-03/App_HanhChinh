import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    padding: normalize(24),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: normalize(18),
    color: colors.black0,
    marginStart: normalize(55),
    fontWeight: 'bold',
  },
  viewTimeline: {
    flex: 1,
    marginLeft: normalize(-30),
  },
  textTimeline: {
    marginStart: normalize(35),
    paddingVertical: normalize(20),
    fontSize: normalize(18),
    color: colors.black0,
    fontWeight: 'bold',
  },
});
export default styles;
