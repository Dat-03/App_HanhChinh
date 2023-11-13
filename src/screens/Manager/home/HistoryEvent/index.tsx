import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {ItemList} from './components';

const HistoryEvent: React.FC = () => {
  const handleGoBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5', color: 'white'}}
        title="Lịch sử sự kiện"
        rightIcon={{name: 'search-outline', type: 'ionicon', color: 'white'}}
        onPressLeftIcon={handleGoBack}
      />
      <ScrollView style={styles.content}>
        <View style={styles.viewText}>
          <Text style={styles.test1}>Phòng Quan hệ doanh</Text>
          <TouchableOpacity>
            <Text style={styles.test2}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ItemList />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.test1}>Bộ môn</Text>
          <TouchableOpacity>
            <Text style={styles.test2}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ItemList />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.test1}>Phòng Tổ Chức Và....</Text>
          <TouchableOpacity>
            <Text style={styles.test2}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ItemList />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.test1}>Phòng Công Tác Sinh...</Text>
          <TouchableOpacity>
            <Text style={styles.test2}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ItemList />
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryEvent;
