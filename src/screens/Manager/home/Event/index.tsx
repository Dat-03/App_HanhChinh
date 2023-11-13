import {Text} from '@rneui/base';
import {TextInput, TouchableOpacity, View} from 'react-native';

import React, {FunctionComponent} from 'react';

import {Icon} from '@rneui/themed';
import styles from './styles';
import {NavigationService} from '../../../../navigation';
import {ItemList, ItemList2} from './components';
import {routes} from '../../../../constants';

const Event: FunctionComponent = () => {
  const handleGoBack = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          type="font-awesome-5"
          color={'white'}
          onPress={handleGoBack}
        />
        <Text style={styles.textHeader}>Lịch sử</Text>
      </View>
      <View style={{paddingVertical: 41, alignItems: 'center'}}>
        <View style={styles.Search}>
          <Icon name="search-outline" type="ionicon" />
          <TextInput placeholder="Tìm kiếm " />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.text1}>Sự kiện sắp tới</Text>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(routes.HISTORYEVENT)}>
            <Text style={styles.text2}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ItemList />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.text1}>Nổi bật</Text>
          <Text style={styles.text2}>Xem thêm</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <ItemList2 />
        </View>
      </View>
    </View>
  );
};

export default Event;
