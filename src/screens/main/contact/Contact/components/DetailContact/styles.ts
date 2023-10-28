import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../../../../../assets/colors';

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
    width: normalize(64),
    height: normalize(64),
    borderRadius: 30,
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
    color: '#FEFEFE',
  },
  textRole: {
    fontSize: normalize(18),
    fontWeight: '400',
    color: '#FFFFFF',
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
    padding: normalize(24),
  },
  textphone: {
    fontSize: normalize(18),
    fontWeight: '400',
    color: '#999999',
  },
  textnumber: {
    fontSize: normalize(18),
    fontWeight: '400',
    color: 'black',
  },
  btn: {
    backgroundColor: '#E9ECEF',
    width: normalize(47),
    height: normalize(47),
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
