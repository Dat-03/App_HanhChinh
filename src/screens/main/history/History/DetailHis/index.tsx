import {View, Text} from 'react-native';
import React from 'react';
import useStyle from './styles';

import {HeaderCustom} from '../../../../../components';
import {NavigationService} from '../../../../../navigation';

const DetailHis: React.FC = () => {
  const styles = useStyle();
  const handleGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'book', type: 'font-awesome'}}
        onPressLeftIcon={handleGoback}
      />
      <Text style={styles.Title}>Yêu cầu</Text>

      <View style={styles.noti}>
        <Text>Sự cố này hoàn thành chưa được tốt cần khắc phục</Text>
      </View>
    </View>
  );
};

export default DetailHis;
