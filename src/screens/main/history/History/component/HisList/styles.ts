import { normalize} from '@rneui/themed';
import { Device } from '../../../../../../utils';
import { StyleSheet } from 'react-native';
import colors from '../../../../../../assets/colors';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight(); //cho hinh`

const useStyles = StyleSheet.create ({
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
  
    
  

});

export default useStyles;