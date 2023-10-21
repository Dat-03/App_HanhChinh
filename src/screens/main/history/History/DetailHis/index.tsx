import { View, Text } from 'react-native'
import React from 'react'
import useStyle from './styles';
import AcceptRequire from '../../../home/Support/component/AcceptRequire';
import StatusRequire from '../../../home/Support/component/StatusRequire';
import { HeaderCustom } from '../../../../../components';
import { NavigationService } from '../../../../../navigation';

const DetailHis: React.FC = () => {
  const styles = useStyle();
  const handleGoback = () => {
    NavigationService.goBack();
  }
  return (
    <View style={styles.container}>
      
      <HeaderCustom leftIcon={{ name: 'book', type: 'font-awesome' }} onPressLeftIcon={handleGoback} />
      <Text style={styles.Title}>Yêu cầu</Text>

   
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