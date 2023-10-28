import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  button: {
    backgroundColor: colors.colorMain,
    height:normalize(HEIGHT*0.06),
    width:normalize(HEIGHT*0.2),
    borderRadius:normalize(10),
    justifyContent:'center',
    alignItems:'center',
    marginTop:normalize(600),
    marginStart:normalize(110)
  },
  text:{
    color:colors.white,
    fontSize:normalize(18),
    fontWeight:'bold',
    
    
  }
 
}));

export default useStyles;
