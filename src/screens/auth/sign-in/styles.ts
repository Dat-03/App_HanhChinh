import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLogin,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundHeader: {
    backgroundColor: colors.primary,
    height: normalize(300),
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  loginContainer: {
    width: normalize(301),
    height: normalize(507),
    backgroundColor: colors.white,
    alignItems: 'center',
    position: 'absolute',
    top: normalize(140),
    borderRadius: 24,
    justifyContent: 'space-around',
  },
  imageLogoStyle: {
    width: normalize(201),
    height: normalize(82.41),
  },
  btnGoogle: {
    width: normalize(169),
    height: normalize(40),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    gap: normalize(10),
  },
  text: {
    fontSize: normalize(14),
    lineHeight: normalize(24),
    color: colors.white,
    fontWeight: '500',
  },
  imageGoogle: {
    height: normalize(24),
    width: normalize(24),
  },
  imageBeeStyle: {
    height: normalize(200),
    width: normalize(120),
  },
});

export default styles;
