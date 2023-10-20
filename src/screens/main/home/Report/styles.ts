import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import { color } from '@rneui/base';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container:{
    flex: normalize(1),
    backgroundColor: colors.white,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:normalize(20),
    paddingVertical:normalize(30),
    paddingHorizontal:normalize(100)
  },
  textinput:{
    backgroundColor:colors.grey4,
    borderRadius:normalize(10),
    width:normalize(HEIGHT*0.4),
    marginVertical:normalize(10),
    justifyContent:'flex-start'
    
    
  }
}));

export default useStyles;
