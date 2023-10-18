import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles'

const Timeline:React.FC = () => {
    const styles=useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trạng thái yêu cầu</Text>

    </View>
  )
}

export default Timeline