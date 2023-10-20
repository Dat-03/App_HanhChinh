import { View, Text } from 'react-native'
import React from 'react'
import useStyle from './styles';
import AcceptRequire from '../../../home/Support/component/AcceptRequire';
import StatusRequire from '../../../home/Support/component/StatusRequire';

const detailHis:React.FC = () => {
    const styles=useStyle();
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Yêu cầu</Text>
      <View>
        <AcceptRequire/>
      </View>
    <View>
        <StatusRequire/>
    </View>
      <View>
        <Text>Sự cố này hoàn thành chưa được tốt cần khắc phục</Text>
      </View>
    </View>
  )
}

export default detailHis