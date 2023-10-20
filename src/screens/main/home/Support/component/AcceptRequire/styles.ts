import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: normalize(100 ),
    backgroundColor:colors.itemColor,
    borderRadius:normalize(5),
    marginHorizontal:normalize(10),
    marginVertical:normalize(10),
    flexDirection:'row',
    paddingLeft:normalize(10)
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
    borderRadius:normalize(50),
    marginStart:normalize(20)
  }


}));

export default useStyles;