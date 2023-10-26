import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import AcceptRequire from '../../../home/Support/component/AcceptRequire';
import StatusRequire from '../../../home/Support/component/StatusRequire';
import { HeaderCustom } from '../../../../../components';
import { NavigationService } from '../../../../../navigation';

const DetailHis: React.FC = () => {

  const handleGoback = () => {
    NavigationService.goBack();
  }
  return (
    <View style={styles.container}>
      
      <HeaderCustom leftIcon={{name: 'angle-left', type:'font-awesome',color: styles.iconLeftStyle.color}} onPressLeftIcon={handleGoback} 
      title='Yêu cầu' />   
  
      <View>
        <AcceptRequire />
      </View>
      <View>
        <StatusRequire />
      </View>
      <View style={styles.noti}>
        <Text>Sự cố này hoàn thành chưa được tốt cần khắc phục</Text>
      </View>
    </View>
  )
}

export default DetailHis