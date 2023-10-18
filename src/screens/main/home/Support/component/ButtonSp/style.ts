import {makeStyles, normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = makeStyles(({colors}) => ({
    container:{
        paddingVertical:normalize(30),
        paddingHorizontal:normalize(10)
    },
    btn:{
        borderColor:'#EC449C',
        borderRadius:normalize(5),
        height:normalize(40),
        borderWidth:normalize(2),
        alignItems:'center',
        justifyContent:'center',
    },
    textBtn:{
        color:colors.textBtnColor,
    }

}));

export default useStyles;