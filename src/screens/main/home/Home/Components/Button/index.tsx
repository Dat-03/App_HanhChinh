import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { Icon } from '@rneui/themed';
import { LayoutAnimationType } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation';
import ButtonCustom from '../../../../../../components/customs/Button';
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';
import Report from '../../../Report';
import { ScrollView } from 'react-native';
const Buttonitem = () => {
    const styles = useStyles();
    return (
        <ScrollView style={styles.scrollView}>
        <ButtonCustom
          textButton="Báo cáo sự cố"
          name="pencil-square"
          type="font-awesome"
          color="#ec449c"
          size={25}
          onPressButton={() => NavigationService.navigate(routes.REPORT)}
        />
        <ButtonCustom
          textButton="Yêu cầu hộ trợ CNTT"
          name="globe"
          type="entypo"
          color="#ec449c"
          size={25}
        />
        <ButtonCustom
          textButton="Quản lý mượn phòng học,hội trường"
          name="appstore1"
          type="antdesign"
          color="#ec449c"
          size={25}
       />
      </ScrollView>
    )
}

export default Buttonitem
