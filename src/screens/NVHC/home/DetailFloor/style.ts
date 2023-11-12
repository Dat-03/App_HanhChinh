import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {theme} from '../../../../theme';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  text: {
    fontSize: normalize(23),
    paddingVertical: normalize(30),
    paddingHorizontal: normalize(100),
    fontWeight: 'bold',
  },
  button:{
    marginStart:10,
    marginTop:480
  }
  
}));

export default useStyles;
