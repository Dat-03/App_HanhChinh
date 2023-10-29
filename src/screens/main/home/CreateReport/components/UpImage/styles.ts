import {StyleSheet} from 'react-native';
import {normalize} from '@rneui/themed';
import colors from '../../../../../../assets/colors';
import {Device} from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
  },
  buttonStyle: {
    width: (WIDTH - 32) / 2 - 4,
    height: normalize(36),
    backgroundColor: colors.colorInput,
    borderWidth: normalize(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.borderButtonCamera,
    borderRadius: normalize(8),
  },
  buttonContainer: {
    width: WIDTH - 32,
    flexDirection: 'row',
    gap: normalize(8),
    marginBottom: normalize(5),
  },

  imgContainer: {
    width: WIDTH - 32,
    flexDirection: 'row',
    gap: normalize(8),
  },
  placeholder: {
    width: (WIDTH - 32) / 2 - 4,
    height: normalize(164),
  },
  imageLibaryStyle: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberImage: {
    fontSize: normalize(24),
    lineHeight: normalize(35),
    fontWeight: 'bold',
    color: colors.white,
    position: 'absolute',
  },
});

export default styles;
