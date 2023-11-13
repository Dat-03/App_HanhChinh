import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '@rneui/themed';
import {color} from '@rneui/base';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  viewHeader: {
    flexDirection: 'row',
    padding: normalize(24),
    alignItems: 'center',
  },
  textHeader: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: colors.white0,
    marginStart: normalize(20),
  },

  image: {
    width: normalize(81),
    height: normalize(81),
    borderRadius: normalize(80),
  },
  viewUser: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalize(15),
  },
  viewText: {
    marginTop: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUser: {
    fontSize: normalize(24),
    fontWeight: '600',
    color: 'white',
  },
  textphone: {
    fontSize: normalize(18),
    fontWeight: '400',
    color: 'white',
  },
  viewContent: {
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
    backgroundColor: colors.white0,
    flex: 1,
    marginTop: normalize(30),
  },
});
export default styles;
