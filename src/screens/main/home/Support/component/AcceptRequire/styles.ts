import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
  container: {
    marginTop:normalize(20),
    height: normalize(100 ),
    margin:normalize(10),
    backgroundColor:colors.grey5,
    borderRadius:normalize(5),
    paddingLeft:normalize(15),
    flexDirection:'row'
  },
  title:{
    color:colors.black,
    fontSize:normalize(15),
    fontWeight:'bold',
    marginBottom:normalize(15),
    marginTop:normalize(10)
  },
  info:{
    flexDirection:'row',
    marginTop:normalize(5),
  },
  text:{
    color:colors.black,
    marginLeft:normalize(20)
  },
  avatar:{
      justifyContent:'center'

  },
  img:{
    width:normalize(50),
    height:normalize(50),
  }


}));

export default useStyles;