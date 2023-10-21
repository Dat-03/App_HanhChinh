import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { color } from '@rneui/base';
import { theme } from '../../../../theme';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: normalize(23),
    paddingVertical: normalize(30),
    paddingHorizontal: normalize(100),
    fontWeight: 'bold',
  },
  textinput: {
    backgroundColor: colors.grey1,
    borderRadius: normalize(10),
    width: normalize(HEIGHT * 0.4),
    marginVertical: normalize(10),
    borderWidth: normalize(1),
    fontSize: normalize(16),
    paddingStart: normalize(20),
  },
  input: {
    fontSize: normalize(16),
    paddingStart: normalize(20),
    borderRadius: 10,
    
  },
  viewInput: {
    width: '85%',
    height: 200,
    borderRadius: normalize(10),
    borderWidth:1,
    backgroundColor: colors.grey1,
  
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical:normalize(20)
  }, image: {
    height: normalize(HEIGHT * 0.06),
    width: normalize(HEIGHT * 0.15),
    backgroundColor: colors.grey1,
    borderRadius: normalize(10),
    borderWidth: normalize(1),
    alignItems: 'center',

  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
}));

export default useStyles;
