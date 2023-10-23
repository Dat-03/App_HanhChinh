import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
    container:{
        backgroundColor:colors.white,
        height:'100%',
        borderTopStartRadius:normalize(20),
        borderTopEndRadius:normalize(20)
    },
    title:{
        textAlign:'center',
        fontSize:normalize(23),
        color:colors.black,
        fontWeight:'bold',
        marginVertical:normalize(10)
    },
    hislist: {
        height: normalize(100 ),
        backgroundColor:colors.itemColor,
        borderRadius:normalize(5),
        marginHorizontal:normalize(10),
        marginVertical:normalize(10),
        flexDirection:'row',
        paddingLeft:normalize(10),
        justifyContent:'space-between'
      },
      title1:{
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
          justifyContent:'center',
          marginRight:normalize(20)
    
      },
      img:{
        width:normalize(50),
        height:normalize(50),
        borderRadius:normalize(50)
      }
    
    


}));

export default useStyles;