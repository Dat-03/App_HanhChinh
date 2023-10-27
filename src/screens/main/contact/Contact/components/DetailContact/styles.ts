import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../../../assets/colors';
import {normalize} from '@rneui/themed';
import {color} from '@rneui/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorMain,
  },
  viewHeader: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white0,
    marginStart: 20,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 30,
  },
  viewUser: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  viewText: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUser: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  textRole: {
    fontSize: 18,
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
  viewtextContent: {
    flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 24,
  },
  textphone: {
    fontSize: 18,
    fontWeight: '400',
  },
  textnumber: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  btn: {
    backgroundColor: colors.line,
    width: 47,
    height: 47,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
