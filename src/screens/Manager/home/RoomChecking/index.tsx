import {TouchableOpacity, View, Text} from 'react-native';

import React, {FunctionComponent} from 'react';

import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import styles from './styles';

const RoomChecking: FunctionComponent = () => {
  const handleGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5', color: 'white'}}
        title="Kiểm tra tính sẵn sàng"
        onPressLeftIcon={handleGoback}
        rightIcon={{name: 'bell', type: 'font-awesome-5', color: 'white'}}
      />
      <View style={styles.content}>
        <View style={{alignItems: 'center', paddingVertical: 16}}>
          <TouchableOpacity style={styles.button1}>
            <View style={styles.viewText}>
              <Text style={styles.text1}>Tòa F</Text>
              <Text style={styles.text1}>3 Tầng</Text>
            </View>
            <Text>
              Tòa dành cho sinh viên học chuyên ngành thiết kế đồ họa và ....
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RoomChecking;
