import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {images} from '../../../../../assets';
import {HeaderCustom} from '../../../../../components';
import {NavigationService} from '../../../../../navigation';
import styles from './styles';

const DetailEvent: React.FC = () => {
  const handleGoBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5', color: 'white'}}
        title="Lịch sử sự kiện"
        onPressLeftIcon={handleGoBack}
      />
      <Image style={styles.image} source={images.event3} />
      <View style={styles.content}>
        <Text style={styles.text1}>
          LỄ TÔN VINH SINH VIÊN TIÊU BIỂU GODEN BEE AWARDS SUMMER 2022
        </Text>
        <View style={styles.viewTime}>
          <Text style={styles.text2}>* 1/3/2023</Text>
          <View style={styles.time}>
            <Text style={styles.texttime}>09:00</Text>
          </View>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text3}>* Phòng ban</Text>
          <Text style={styles.text4}>Phòng công tác sinh viên</Text>
        </View>
        <View style={{padding: 16}}>
          <Text style={styles.text3}>* Thông tin chi tiết</Text>
        </View>
        <View style={{paddingHorizontal: 16}}>
          <TextInput
            numberOfLines={4}
            multiline
            style={styles.textInput}
            textAlignVertical="top"
            placeholder="-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
          />
        </View>
        <View style={{padding: 16}}>
          <Text style={styles.text6}>
            <Text style={{color: 'black'}}> * Địa điểm: </Text>
            <Text style={{color: 'gray'}}>
              Tòa nhà Innovalion, lô 24, Công viên phần mềm Quang Trung, Quận
              12, Hồ Chí minh
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailEvent;
