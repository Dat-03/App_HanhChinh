import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';


const WIDTH =  Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor:colors.primary,
    alignItems:'center',
    justifyContent:'center',
    
  },
  button:{
    backgroundColor:colors.grey4,
    height:normalize(HEIGHT*0.1),
    width:normalize(HEIGHT*0.4),
    borderRadius: normalize(10),
    alignItems:'center',
    paddingStart:normalize(15),
    flexDirection:'row',
    marginVertical:normalize(10)
    
  },
  tile:{
    paddingStart:normalize(20),
    fontSize:normalize(16)
  }
 
  
}));

export default useStyles;
