import { View, Text } from 'react-native'
import React from 'react'
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';
import styles from './styles';
import { HeaderCustom, TabViewItem } from '../../../../../../components';
import ProblemScreen from './components/ProblemScreen';
import AcceptScreen from './components/AcceptScreen';
import NotDoneScreen from './components/NotDoneScreen';
import DoneScreen from './components/DoneScreen';


const ComputerError:React.FC = () => {
    const handlePressGoback = () => {
        NavigationService.navigate(routes.STATISTICAL);
      };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'left', type: 'antdesign', color: 'white'}}
        onPressLeftIcon={handlePressGoback}
        title="Lỗi máy tính"
        rightIcon={{name: 'bell', type: 'evilicon', color: 'white'}}
      />
      <TabViewItem
        title1={'Sự cố'}
        title2={'Đã tiếp nhận'}
        title3={'Chưa hoàn thành'}
        title4={'Hoàn thành'}
        screen1={<ProblemScreen/>}
        screen2={<AcceptScreen/>}
        screen3={<NotDoneScreen/>}
        screen4={<DoneScreen/>}
        titleStyle={styles.titleStyle}
      />
    </View>
  )
}
export default ComputerError